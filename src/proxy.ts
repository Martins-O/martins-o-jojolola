import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Generate a nonce for inline scripts
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // Content Security Policy - More secure without unsafe-eval
  // Using 'strict-dynamic' allows scripts loaded by trusted scripts
  // Note: For Next.js in production, some inline scripts are hashed automatically
  const csp = [
    "default-src 'self'",
    // Script policy: Allow self, Google Analytics, and use nonce for inline scripts
    // 'strict-dynamic' trusts scripts loaded by already-trusted scripts
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''
    } https://www.googletagmanager.com https://www.google-analytics.com`,
    // Style policy: Allow self, Google Fonts, and unsafe-inline in dev for DevTools
    `style-src 'self' https://fonts.googleapis.com ${
      process.env.NODE_ENV === 'development' ? "'unsafe-inline'" : ''
    }`,
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com",
    // Connect policy: Allow Formspree form submission and all Google Analytics subdomains
    "connect-src 'self' https://formspree.io https://*.google-analytics.com https://analytics.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  // Pass the nonce to the page via header (can be read by layout)
  response.headers.set('X-Nonce', nonce);

  // Rate limiting headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('X-RateLimit-Policy', 'contact=3/15min');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
