import About from '@/components/sections/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Martins O Jojolola',
  description:
    'Learn more about Martins O Jojolola - Smart Contract Engineer, Full-Stack Developer, and Web3 Builder.',
};

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <About />
    </main>
  );
}
