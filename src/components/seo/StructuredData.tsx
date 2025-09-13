export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Martins O Jojolola",
    "jobTitle": "Quality Assurance Engineer, Backend Developer, Blockchain Developer",
    "description": "Experienced software quality assurance engineer with expertise in backend development and blockchain technologies from Lagos, Nigeria.",
    "url": "https://martins-jojolola.vercel.app",
    "email": "jojololamartins686@gmail.com",
    "telephone": "+234-814-658-7069",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "sameAs": [
      "https://github.com/Martins-O",
      "https://linkedin.com/in/martins-o-jojolola",
      "https://twitter.com/JojoOfETH"
    ],
    "knowsAbout": [
      "Quality Assurance",
      "Test Automation",
      "Backend Development",
      "Blockchain Development", 
      "Solidity",
      "Rust",
      "Cairo",
      "Node.js",
      "Python",
      "Smart Contracts",
      "DeFi Protocols",
      "Web3 Development",
      "JavaScript",
      "TypeScript",
      "Java",
      "Microservices",
      "API Development"
    ],
    "alumniOf": "Software Engineering",
    "workLocation": {
      "@type": "Place",
      "name": "Lagos, Nigeria"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martins O Jojolola - Tech Services",
    "description": "Professional QA, Backend Development, and Blockchain Development Services",
    "founder": {
      "@type": "Person",
      "name": "Martins O Jojolola"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Quality Assurance Testing",
      "Backend API Development", 
      "Smart Contract Development",
      "DeFi Protocol Development",
      "Web3 Application Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Martins O Jojolola Portfolio",
    "description": "Professional portfolio showcasing QA expertise, backend development, and blockchain innovation",
    "url": "https://martins-jojolola.vercel.app",
    "author": {
      "@type": "Person",
      "name": "Martins O Jojolola"
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "genre": "Portfolio Website"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}