import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import OfflineNotice from "@/components/ui/OfflineNotice";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import SkipLinks from "@/components/ui/SkipLinks";
import ThemeScript from "@/components/ui/ThemeScript";
import { GoogleAnalytics } from "@/lib/analytics";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://martins-jojolola.dev'),
  title: {
    default: "Martins O Jojolola - QA Engineer | Backend Developer | Blockchain Developer",
    template: "%s | Martins O Jojolola"
  },
  description: "Expert QA Engineer, Backend Developer & Blockchain Developer from Lagos, Nigeria. Specializing in test automation, Node.js/Python backends, and Solidity/Rust smart contracts. 5+ years experience.",
  keywords: [
    "Quality Assurance Engineer",
    "Backend Developer", 
    "Blockchain Developer",
    "Test Automation",
    "Cypress",
    "Playwright",
    "Node.js",
    "Python",
    "Solidity",
    "Rust", 
    "Cairo",
    "Smart Contracts",
    "DeFi",
    "Web3",
    "Lagos Nigeria",
    "Software Testing",
    "API Development",
    "Microservices"
  ],
  authors: [{ name: "Martins O Jojolola", url: "https://martins-jojolola.dev" }],
  creator: "Martins O Jojolola",
  publisher: "Martins O Jojolola",
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
    type: "website",
    locale: "en_US",
    url: "https://martins-jojolola.dev",
    siteName: "Martins O Jojolola Portfolio",
    title: "Martins O Jojolola - QA Engineer | Backend Developer | Blockchain Developer",
    description: "Expert QA Engineer, Backend Developer & Blockchain Developer from Lagos, Nigeria. Specializing in test automation, backends, and smart contracts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martins O Jojolola - QA Engineer, Backend Developer & Blockchain Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Martins O Jojolola - QA Engineer | Backend Developer | Blockchain Developer",
    description: "Expert QA Engineer, Backend Developer & Blockchain Developer from Lagos, Nigeria",
    creator: "@jojolola_dev",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://martins-jojolola.dev"
  },
  category: "Technology"
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`} suppressHydrationWarning>
        <ThemeScript />
        <GoogleAnalytics />
        <StructuredData />
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
