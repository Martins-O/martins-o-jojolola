import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import MobileBottomNav from '@/components/ui/MobileBottomNav';
import OfflineNotice from '@/components/ui/OfflineNotice';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import SkipLinks from '@/components/ui/SkipLinks';
import ThemeScript from '@/components/ui/ThemeScript';
import { GoogleAnalytics } from '@/lib/analytics';
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from '@/components/SEO/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://martins-jojolola.dev'),
  title: {
    default:
      'Martins O Jojolola - Smart Contract Engineer | Full-Stack Developer | Web3 Builder',
    template: '%s | Martins O Jojolola',
  },
  description:
    'Expert Smart Contract Engineer, Full-Stack Developer & Web3 Builder from Lagos, Nigeria. Specializing in Solidity/Rust smart contracts, Next.js frontends, and Node.js backends. 3+ years experience.',
  keywords: [
    'Smart Contract Engineer',
    'Full-Stack Developer',
    'Web3 Builder',
    'Solidity',
    'Rust',
    'Smart Contracts',
    'DeFi',
    'Next.js',
    'TypeScript',
    'Node.js',
    'DApp Development',
    'Blockchain Architecture',
    'Lagos Nigeria',
  ],
  authors: [
    { name: 'Martins O Jojolola', url: 'https://martins-jojolola.dev' },
  ],
  creator: 'Martins O Jojolola',
  publisher: 'Martins O Jojolola',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://martins-jojolola.dev',
    siteName: 'Martins O Jojolola Portfolio',
    title:
      'Martins O Jojolola - Smart Contract Engineer | Full-Stack Developer | Web3 Builder',
    description:
      'Expert Smart Contract Engineer, Full-Stack Developer & Web3 Builder from Lagos, Nigeria. Specializing in smart contracts and Web3 dApps.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Martins O Jojolola - Smart Contract Engineer, Full-Stack Developer & Web3 Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Martins O Jojolola - Smart Contract Engineer | Full-Stack Developer | Web3 Builder',
    description:
      'Expert Smart Contract Engineer, Full-Stack Developer & Web3 Builder from Lagos, Nigeria',
    creator: '@jojoOfETH',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://martins-jojolola.dev',
  },
  category: 'Technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeScript />
        <GoogleAnalytics />
        <PersonStructuredData
          name="Martins O Jojolola"
          jobTitle="Smart Contract Engineer & Full-Stack Developer"
          description="Expert Smart Contract Engineer, Full-Stack Developer & Web3 Builder from Lagos, Nigeria. Specializing in smart contracts and full-stack Web3 development."
          url="https://martins-jojolola.dev"
          sameAs={[
            'https://github.com/Martins-O',
            'https://linkedin.com/in/martins-o-jojolola',
            'https://twitter.com/jojoOfETH',
          ]}
          skills={[
            'Smart Contracts',
            'Full-Stack Development',
            'Web3 Integration',
            'Solidity',
            'Rust',
            'DeFi',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Blockchain Architecture',
          ]}
        />
        <WebsiteStructuredData />
        <SkipLinks />
        <ErrorBoundary>
          <Navigation />
          <OfflineNotice />
          {children}
          <Footer />
          <ScrollToTop />
          <MobileBottomNav />
        </ErrorBoundary>
      </body>
    </html>
  );
}
