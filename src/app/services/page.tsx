import Services from '@/components/sections/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Professional Services - Smart Contracts, Full-Stack & Web3 Infrastructure',
  description:
    'Expert development services for smart contracts, full-stack Web3 applications, and blockchain infrastructure.',
  openGraph: {
    title: 'Professional Services - Martins O Jojolola',
    description:
      'Expert development services for smart contracts, full-stack development, and Web3 solutions.',
  },
};

export default function ServicesPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Services />
    </main>
  );
}
