// Centralized configuration for contact information
// These values are read from environment variables to avoid hardcoding

export const contactConfig = {
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@martins-jojolola.dev',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+234 812 345 6789',
  location: 'Lagos, Nigeria',
  social: {
    github: 'https://github.com/Martins-O',
    linkedin: 'https://linkedin.com/in/martins-o-jojolola',
    twitter: 'https://twitter.com/jojoOfETH',
  },
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://martins-jojolola.dev',
};

// Helper to get mailto link
export const getMailtoLink = () => `mailto:${contactConfig.email}`;
