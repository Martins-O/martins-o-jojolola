export interface ProjectResult {
  metric: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category:
    | 'Quality Assurance'
    | 'Backend Development'
    | 'Blockchain Development'
    | 'Full Stack Development';
  coverImage?: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  completedAt: string;
  duration: string;
  teamSize: string;
  role: string;
  overview: string;
  challenge?: string;
  solution?: string;
  features: string[];
  results: ProjectResult[];
  featured: boolean;
}

// Sample projects with detailed case studies
const projects: Project[] = [
  // {
  //   slug: 'defi-yield-farming-protocol',
  //   title: 'DeFi Yield Farming Protocol',
  //   description:
  //     'A comprehensive DeFi protocol enabling users to stake tokens and earn rewards through automated yield farming strategies.',
  //   category: 'Blockchain Development',
  //   coverImage:
  //     'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=630&fit=crop',
  //   images: [
  //     'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
  //     'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
  //   ],
  //   technologies: [
  //     'Solidity',
  //     'Foundry',
  //     'OpenZeppelin',
  //     'Ethereum',
  //     'Web3.js',
  //     'React',
  //     'TypeScript',
  //   ],
  //   githubUrl: 'https://github.com/Martins-O/defi-yield-farming-protocol',
  //   liveUrl: 'https://defi-farming.martins-jojolola.dev',
  //   completedAt: 'December 2024',
  //   duration: '3 months',
  //   teamSize: 'Solo project',
  //   role: 'Lead Blockchain Developer',
  //   overview:
  //     'Built a complete DeFi yield farming protocol from scratch, including smart contracts, tokenomics, and frontend interface. The protocol allows users to stake various ERC-20 tokens and earn rewards through automated yield farming strategies.',
  //   challenge:
  //     'Creating a secure, gas-efficient protocol that could handle multiple token pairs while preventing common DeFi exploits like flash loan attacks, reentrancy vulnerabilities, and oracle manipulation.',
  //   solution:
  //     'Implemented a multi-layered security approach using OpenZeppelin contracts, comprehensive test coverage with Hardhat, and integrated Chainlink oracles for reliable price feeds. Added circuit breakers and time locks for critical functions.',
  //   features: [
  //     'Multi-token staking with flexible reward distribution',
  //     'Automated compound farming strategies',
  //     'Emergency pause mechanisms and circuit breakers',
  //     'Gas-optimized smart contracts with proxy patterns',
  //     'Real-time APY calculations and analytics',
  //     'Mobile-responsive Web3 frontend',
  //   ],
  //   results: [
  //     { metric: '$2.5M+', description: 'Total Value Locked (TVL)' },
  //     { metric: '1,200+', description: 'Active Users' },
  //     { metric: '99.9%', description: 'Uptime Since Launch' },
  //     { metric: '0', description: 'Security Incidents' },
  //   ],
  //   featured: true,
  // },
  // {
  //   slug: 'automated-testing-framework',
  //   title: 'Enterprise Test Automation Framework',
  //   description: 'Scalable test automation framework built with Cypress, supporting parallel execution and comprehensive reporting for enterprise applications.',
  //   category: 'Quality Assurance',
  //   coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
  //   images: [
  //     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  //     'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop'
  //   ],
  //   technologies: ['Cypress', 'TypeScript', 'Docker', 'Jenkins', 'GitHub Actions', 'Playwright', 'Allure Reports'],
  //   githubUrl: 'https://github.com/martins-jojolola/enterprise-test-framework',
  //   completedAt: 'November 2024',
  //   duration: '4 months',
  //   teamSize: '3 QA Engineers',
  //   role: 'Senior QA Engineer & Framework Architect',
  //   overview: 'Designed and implemented a comprehensive test automation framework for a large-scale e-commerce platform, supporting both web and API testing with advanced features like visual regression testing and cross-browser compatibility.',
  //   challenge: 'The existing manual testing process was taking 2 weeks per release cycle, creating bottlenecks in deployment. The team needed a robust, maintainable automation framework that could scale across multiple applications and environments.',
  //   solution: 'Built a modular framework using Cypress with TypeScript, implementing Page Object Model patterns, custom commands, and data-driven testing. Added Docker containerization for consistent execution across environments and integrated with CI/CD pipelines.',
  //   features: [
  //     'Page Object Model architecture with TypeScript',
  //     'Cross-browser testing with Playwright integration',
  //     'Visual regression testing capabilities',
  //     'API testing with automated contract validation',
  //     'Parallel test execution with load balancing',
  //     'Comprehensive reporting with Allure integration',
  //     'CI/CD pipeline integration with automated notifications'
  //   ],
  //   results: [
  //     { metric: '70%', description: 'Reduction in Testing Time' },
  //     { metric: '95%', description: 'Test Coverage Achieved' },
  //     { metric: '500+', description: 'Automated Test Cases' },
  //     { metric: '85%', description: 'Faster Bug Detection' }
  //   ],
  //   featured: true
  // },
  {
    slug: 'Arbilink',
    title: 'Arbilink',
    category: 'Blockchain Development',
    coverImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop',
    description:
      'ArbiLink is a trustless, optimistic cross-chain messaging protocol built on Arbitrum Stylus. It allows any smart contract or dApp on Arbitrum to trigger function calls on Ethereum, Base, Polygon, Optimism, or any registered EVM destination — without bridges, wrapped tokens, or lock-and-mint mechanisms.',
    // 'Cross-chain messaging protocol on Arbitrum Stylus. Arbitrum Open House NYC Buildathon.',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    ],
    technologies: [
      'Solidity',
      'OpenZeppelin',
      'Ethereum',
      'Arbitrum',
      'Hardhat',
      'Ethers.js',
      'React',
      'nodejs',
    ],
    githubUrl: 'https://github.com/martins-jojolola/arbilink',
    liveUrl: 'https://arbilink-docs.vercel.app/',
    completedAt: 'Febuary 2026',
    duration: '2 months',
    teamSize: 'Solo project',
    role: 'Blockchain Developer',
    overview:
      'Developed a Cross-chain messaging protocol on Arbitrum Stylus. Arbitrum Open House NYC Buildathon.',
    challenge:
      'ArbiLink solves a simple but critical problem: smart contracts on different chains cannot talk to each other natively.',
    solution:
      'Built Arbilink to solve the communication issue between chains without having to deploy same code on other chains.',
    features: [
      'A MessageHub contract lives on Arbitrum Sepolia, written in Rust using the Stylus SDK. It accepts outbound messages, collects fees, and manages a network of staked relayers.',
      'An ArbiLinkReceiver contract lives on each destination chain (Ethereum, Base, etc.), written in Solidity. It verifies ECDSA-signed execution proofs from the hub and executes arbitrary calls on behalf of the original sender.',
      'An off-chain relayer network watches for MessageSent events on Arbitrum, delivers messages to destination chains, and submits execution proofs back to the hub.',
      'A TypeScript SDK (@arbilink/sdk) wraps the entire flow into a single sendMessage() call for dApp developers.',
      // 'Comprehensive audit trail and transaction monitoring',
    ],
    results: [
      { metric: '100+', description: 'Concurrent Users Supported' },
      { metric: '99.99%', description: 'System Uptime' },
      { metric: '150ms', description: 'Average Response Time' },
      { metric: '80%', description: 'Deployment Time Reduction' },
    ],
    featured: true,
  },
  // {
  //   slug: 'cross-chain-bridge-protocol',
  //   title: 'Cross-Chain Bridge Protocol',
  //   description: 'Secure cross-chain bridge enabling seamless asset transfers between Ethereum, Polygon, and BSC with automated validation.',
  //   category: 'Blockchain Development',
  //   coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=630&fit=crop',
  //   images: [
  //     'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
  //     'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
  //   ],
  //   technologies: ['Solidity', 'Ethereum', 'Polygon', 'BSC', 'Chainlink', 'Node.js', 'Web3.js', 'IPFS'],
  //   githubUrl: 'https://github.com/martins-jojolola/cross-chain-bridge',
  //   liveUrl: 'https://bridge.multichain-protocol.com',
  //   completedAt: 'September 2024',
  //   duration: '4 months',
  //   teamSize: '4 Blockchain Developers',
  //   role: 'Blockchain Architect',
  //   overview: 'Developed a trustless cross-chain bridge protocol enabling users to transfer assets between major blockchains with minimal fees and maximum security through cryptographic proofs and validator networks.',
  //   challenge: 'Creating a secure bridge without relying on centralized validators while maintaining fast transaction speeds and low costs. The protocol needed to prevent double-spending attacks and handle network congestion gracefully.',
  //   solution: 'Implemented a hybrid approach using optimistic rollups with fraud proofs, combined with a decentralized validator network. Added multi-signature security and time-delayed withdrawals for large amounts.',
  //   features: [
  //     'Support for major EVM-compatible chains',
  //     'Optimistic rollup architecture with fraud proofs',
  //     'Decentralized validator network with staking',
  //     'Dynamic fee calculation based on network conditions',
  //     'Emergency pause functionality for security',
  //     'Comprehensive audit trail and transaction monitoring'
  //   ],
  //   results: [
  //     { metric: '$50M+', description: 'Volume Bridged' },
  //     { metric: '15,000+', description: 'Successful Transfers' },
  //     { metric: '0.1%', description: 'Average Bridge Fee' },
  //     { metric: '5 min', description: 'Average Transfer Time' }
  //   ],
  //   featured: false
  // },
  {
    slug: 'Educore',
    title: 'Educore',
    description:
      'A multi-tenant, SaaS-based School Management System targeting primary and secondary schools. Built with Next.js 14, MongoDB, TypeScript, and Tailwind CSS.',
    category: 'Full Stack Development',
    coverImage:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=630&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
    ],
    technologies: [
      'Next.JS',
      'Typescript',
      'Mongodb',
      'Cloudinary',
      'NodeJS',
      'React',
      'SaaS',
    ],
    githubUrl: 'https://github.com/Martins-O/school-management.git',
    liveUrl: 'https://school-management-xi-bay.vercel.app/',
    completedAt: 'May 2026',
    duration: '2 months',
    teamSize: 'Solo project',
    role: 'Full-Stack',
    overview:
      "EduCore is a multi-tenant SaaS school management system targeting private schools — currently being built on Next.js 14, MongoDB, and deployed on Vercel. It's in active development with early GTM happening simultaneously, initially focused on Nigerian private schools with UK private schools as a secondary market.",
    challenge:
      'Private schools — especially in Nigeria — run on a combination of paper records, WhatsApp groups, Excel spreadsheets, and verbal communication. The result:\n' +
      '\n' +
      'Student records are incomplete, inconsistent, or physically lost\n' +
      'Fee tracking is manual, leading to revenue leakage and disputes\n' +
      "Academic performance data isn't aggregated anywhere useful\n" +
      'Staff scheduling and payroll are error-prone\n' +
      "Parents have no visibility into their child's progress without physically visiting the school",
    solution:
      'A cloud-hosted, affordable, mobile-accessible school management platform that a Nigerian private school proprietor can set up without an IT department, and that parents can use on a basic Android phone.',
    features: [
      'Student Management — enrollment, profiles, attendance tracking, welfare records',
      'Academic Management — timetabling, grade entry, report card generation',
      'Staff Management — HR records, scheduling, leave management',
      'Finance (partial) — fee collection, payment tracking, outstanding balances',
      'Multi-tenant — one platform serves many schools, each fully isolated',
      'Per-school configuration — grading systems, terminology, academic year structure are all customisable',
      'Subdomain routing per school for a professional feel',
    ],
    results: [
      // { metric: '2,500+', description: 'NFTs Traded' },
      // { metric: '$500K+', description: 'Trading Volume' },
      // { metric: '40%', description: 'Gas Cost Reduction' },
      // { metric: '300+', description: 'Active Traders' },
    ],
    featured: true,
  },
  //   {
  //     slug: 'api-performance-monitoring',
  //     title: 'API Performance Monitoring Suite',
  //     description: 'Comprehensive API monitoring and performance testing suite with real-time alerting and detailed analytics.',
  //     category: 'Quality Assurance',
  //     coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
  //     images: [
  //       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  //       'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop'
  //     ],
  //     technologies: ['K6', 'Grafana', 'Prometheus', 'Node.js', 'Docker', 'PostgreSQL', 'Slack API'],
  //     githubUrl: 'https://github.com/martins-jojolola/api-monitoring-suite',
  //     completedAt: 'July 2024',
  //     duration: '2 months',
  //     teamSize: '2 QA Engineers',
  //     role: 'Performance Testing Lead',
  //     overview: 'Developed a comprehensive API monitoring solution that tracks performance metrics, runs automated load tests, and provides detailed analytics for multiple microservices.',
  //     challenge: 'The development team had no visibility into API performance degradation until users complained. They needed proactive monitoring with intelligent alerting to prevent performance issues.',
  //     solution: 'Built a custom monitoring suite using K6 for load testing, Prometheus for metrics collection, and Grafana for visualization. Added intelligent alerting based on performance trends and anomaly detection.',
  //     features: [
  //       'Automated load testing with configurable scenarios',
  //       'Real-time performance metrics dashboard',
  //       'Intelligent alerting with anomaly detection',
  //       'Historical performance trend analysis',
  //       'Multi-environment testing support',
  //       'Integration with CI/CD pipelines'
  //     ],
  //     results: [
  //       { metric: '90%', description: 'Faster Issue Detection' },
  //       { metric: '50+', description: 'APIs Monitored' },
  //       { metric: '24/7', description: 'Continuous Monitoring' },
  //       { metric: '75%', description: 'Reduction in Performance Issues' }
  //     ],
  //     featured: false
  //   }
];

export async function getAllProjects(): Promise<Project[]> {
  return projects.sort(
    (a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  const project = projects.find((project) => project.slug === slug);
  return project || null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return projects.map((project) => project.slug);
}

export async function getProjectsByCategory(
  category: string
): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}
