export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  publishedAt: string
  readingTime: number
  category: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

// Sample blog posts - replace with your actual content
const blogPosts: BlogPost[] = [
  {
    slug: 'smart-contract-testing-guide',
    title: 'The Complete Guide to Smart Contract Testing with Hardhat and Chai',
    excerpt: 'Learn how to build comprehensive test suites for Ethereum smart contracts using industry best practices, automated testing patterns, and real-world examples.',
    content: `
      <h2>Introduction to Smart Contract Testing</h2>
      <p>Smart contract testing is critical for blockchain applications. Unlike traditional software, smart contracts are immutable once deployed, making thorough testing essential.</p>
      
      <h2>Setting Up Your Testing Environment</h2>
      <p>We'll use Hardhat as our development environment and Chai for assertions:</p>
      
      <pre><code>npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers chai</code></pre>
      
      <h2>Writing Your First Test</h2>
      <p>Here's a basic structure for testing a simple contract:</p>
      
      <pre><code>const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Token");
    [owner, addr1] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });

  it("Should set the right owner", async function () {
    expect(await hardhatToken.owner()).to.equal(owner.address);
  });
});</code></pre>

      <h2>Advanced Testing Patterns</h2>
      <p>For complex DeFi protocols, you'll want to test edge cases, gas optimization, and security vulnerabilities:</p>
      
      <ul>
        <li>Reentrancy attacks</li>
        <li>Integer overflow/underflow</li>
        <li>Access control mechanisms</li>
        <li>State consistency</li>
      </ul>

      <h2>Gas Optimization Testing</h2>
      <p>Monitor gas usage across different scenarios to optimize contract efficiency.</p>

      <h2>Integration Testing</h2>
      <p>Test your contracts with external protocols and oracles in a forked mainnet environment.</p>

      <h2>Conclusion</h2>
      <p>Comprehensive testing is your first line of defense against smart contract vulnerabilities. Build a robust test suite before deploying to mainnet.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=630&fit=crop',
    publishedAt: '2024-12-15',
    readingTime: 8,
    category: 'Blockchain',
    tags: ['Smart Contracts', 'Testing', 'Hardhat', 'Solidity', 'DeFi'],
    githubUrl: 'https://github.com/martins-jojolola/smart-contract-testing',
    featured: true
  },
  {
    slug: 'cypress-automation-framework',
    title: 'Building Scalable Test Automation Frameworks with Cypress',
    excerpt: 'Discover how to architect maintainable, scalable test automation frameworks using Cypress, including custom commands, page objects, and CI/CD integration.',
    content: `
      <h2>Why Cypress for Test Automation?</h2>
      <p>Cypress provides a modern approach to end-to-end testing with real-time browser testing, automatic waiting, and excellent debugging capabilities.</p>

      <h2>Framework Architecture</h2>
      <p>A well-structured Cypress framework should include:</p>
      <ul>
        <li>Page Object Model implementation</li>
        <li>Custom commands for reusable actions</li>
        <li>Environment-specific configurations</li>
        <li>Data management strategies</li>
      </ul>

      <h2>Setting Up Page Objects</h2>
      <pre><code>// cypress/support/pages/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('[data-cy=username]').type(username);
    return this;
  }

  fillPassword(password) {
    cy.get('[data-cy=password]').type(password);
    return this;
  }

  submit() {
    cy.get('[data-cy=login-button]').click();
  }
}

export default LoginPage;</code></pre>

      <h2>Custom Commands</h2>
      <p>Create reusable commands for common operations:</p>
      
      <pre><code>Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login');
    cy.get('[data-cy=username]').type(username);
    cy.get('[data-cy=password]').type(password);
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/dashboard');
  });
});</code></pre>

      <h2>Parallel Execution</h2>
      <p>Configure Cypress for parallel test execution to reduce feedback time:</p>
      
      <pre><code>// cypress.config.js
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    experimentalStudio: true
  }
});</code></pre>

      <h2>CI/CD Integration</h2>
      <p>Integrate with GitHub Actions for automated testing on every pull request.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use data attributes for element selection</li>
        <li>Implement proper wait strategies</li>
        <li>Keep tests independent and atomic</li>
        <li>Use fixtures for test data management</li>
      </ul>
    `,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    publishedAt: '2024-12-10',
    readingTime: 10,
    category: 'Quality Assurance',
    tags: ['Cypress', 'Test Automation', 'QA', 'JavaScript', 'CI/CD'],
    githubUrl: 'https://github.com/martins-jojolola/cypress-framework',
    demoUrl: 'https://cypress-demo.martins-jojolola.dev',
    featured: true
  },
  {
    slug: 'nodejs-microservices-architecture',
    title: 'Microservices Architecture with Node.js: A Complete Guide',
    excerpt: 'Learn how to design and implement scalable microservices using Node.js, Docker, and modern deployment strategies for enterprise applications.',
    content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture breaks down monolithic applications into smaller, independent services that communicate over well-defined APIs.</p>

      <h2>Service Design Principles</h2>
      <ul>
        <li>Single Responsibility Principle</li>
        <li>Domain-Driven Design</li>
        <li>Database per Service</li>
        <li>API Gateway Pattern</li>
      </ul>

      <h2>Node.js Service Implementation</h2>
      <pre><code>// user-service/src/server.js
const express = require('express');
const { connectDB } = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(\`User service running on port \${PORT}\`);
  });
});</code></pre>

      <h2>Service Communication</h2>
      <p>Implement both synchronous (REST/GraphQL) and asynchronous (Message Queues) communication:</p>

      <pre><code>// Event-driven communication with RabbitMQ
const amqp = require('amqplib');

class EventBus {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL);
    this.channel = await this.connection.createChannel();
  }

  async publish(exchange, routingKey, data) {
    await this.channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)));
  }
}</code></pre>

      <h2>Docker Configuration</h2>
      <pre><code># Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]</code></pre>

      <h2>API Gateway Implementation</h2>
      <p>Use Kong or custom Express gateway for request routing, authentication, and rate limiting.</p>

      <h2>Monitoring and Observability</h2>
      <p>Implement distributed tracing, centralized logging, and metrics collection for production readiness.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop',
    publishedAt: '2024-12-05',
    readingTime: 12,
    category: 'Backend Development',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture', 'Scalability'],
    githubUrl: 'https://github.com/martins-jojolola/nodejs-microservices',
    featured: false
  },
  {
    slug: 'defi-protocol-security-audit',
    title: 'DeFi Protocol Security: Common Vulnerabilities and Mitigation Strategies',
    excerpt: 'Explore critical security considerations for DeFi protocols, including reentrancy attacks, flash loan exploits, and oracle manipulation vulnerabilities.',
    content: `
      <h2>The Current State of DeFi Security</h2>
      <p>DeFi protocols have lost billions to hacks and exploits. Understanding common attack vectors is crucial for building secure protocols.</p>

      <h2>Common Vulnerability Patterns</h2>
      
      <h3>1. Reentrancy Attacks</h3>
      <p>The classic attack pattern where external calls allow malicious contracts to re-enter your function:</p>
      
      <pre><code>// Vulnerable code
function withdraw() external {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    
    // External call before state change - VULNERABLE!
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    
    balances[msg.sender] = 0; // Too late!
}</code></pre>

      <p>Secure implementation using Checks-Effects-Interactions pattern:</p>
      
      <pre><code>// Secure code
function withdraw() external nonReentrant {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    
    // Update state first
    balances[msg.sender] = 0;
    
    // External call last
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}</code></pre>

      <h3>2. Flash Loan Attacks</h3>
      <p>Attackers use flash loans to manipulate protocol state within a single transaction.</p>

      <h3>3. Oracle Manipulation</h3>
      <p>Price feed manipulation can drain protocol funds through arbitrage opportunities.</p>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Use OpenZeppelin's security contracts</li>
        <li>Implement comprehensive test suites</li>
        <li>Follow checks-effects-interactions pattern</li>
        <li>Use time delays for critical operations</li>
        <li>Implement circuit breakers</li>
      </ul>

      <h2>Automated Security Tools</h2>
      <p>Integrate tools like Slither, MythX, and Echidna into your development workflow:</p>
      
      <pre><code># Run Slither analysis
slither contracts/

# Run unit tests with coverage
npm run test:coverage

# Run property-based testing with Echidna
echidna-test contracts/Token.sol</code></pre>

      <h2>Formal Verification</h2>
      <p>For critical protocols, consider formal verification to mathematically prove contract correctness.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop',
    publishedAt: '2024-11-28',
    readingTime: 15,
    category: 'Blockchain',
    tags: ['DeFi', 'Security', 'Smart Contracts', 'Auditing', 'Solidity'],
    githubUrl: 'https://github.com/martins-jojolola/defi-security-examples',
    featured: true
  },
  {
    slug: 'api-testing-strategies',
    title: 'Comprehensive API Testing Strategies for Modern Applications',
    excerpt: 'Master API testing with advanced techniques including contract testing, performance testing, and security validation for robust backend services.',
    content: `
      <h2>The Importance of API Testing</h2>
      <p>APIs are the backbone of modern applications. Comprehensive testing ensures reliability, performance, and security.</p>

      <h2>Testing Pyramid for APIs</h2>
      <ul>
        <li>Unit Tests (70%)</li>
        <li>Integration Tests (20%)</li>
        <li>End-to-End Tests (10%)</li>
      </ul>

      <h2>Contract Testing with Pact</h2>
      <p>Ensure API contracts between services remain consistent:</p>
      
      <pre><code>// Consumer test (Frontend)
describe("User API", () => {
  const provider = new Pact({
    consumer: "UserFrontend",
    provider: "UserAPI"
  });

  it("should return user data", async () => {
    await provider
      .given("user exists")
      .uponReceiving("a request for user data")
      .withRequest({
        method: "GET",
        path: "/api/users/1"
      })
      .willRespondWith({
        status: 200,
        body: {
          id: 1,
          name: "John Doe",
          email: "john@example.com"
        }
      });
  });
});</code></pre>

      <h2>Performance Testing</h2>
      <p>Use tools like Artillery or k6 for load testing:</p>
      
      <pre><code># artillery.yml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60
      arrivalRate: 10

scenarios:
  - name: "Get user profile"
    requests:
      - get:
          url: "/api/users/{{ $randomInt(1, 1000) }}"</code></pre>

      <h2>Security Testing</h2>
      <p>Validate authentication, authorization, and input sanitization:</p>
      
      <pre><code>// Security test examples
describe("API Security", () => {
  it("should reject unauthorized requests", async () => {
    const response = await request(app)
      .get("/api/protected")
      .expect(401);
  });

  it("should prevent SQL injection", async () => {
    const maliciousInput = "'; DROP TABLE users; --";
    const response = await request(app)
      .post("/api/users")
      .send({ name: maliciousInput })
      .expect(400);
  });
});</code></pre>

      <h2>Data-Driven Testing</h2>
      <p>Use parameterized tests for comprehensive coverage.</p>

      <h2>Monitoring and Alerting</h2>
      <p>Implement health checks and synthetic monitoring for production APIs.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop',
    publishedAt: '2024-11-20',
    readingTime: 8,
    category: 'Quality Assurance',
    tags: ['API Testing', 'Performance Testing', 'Security', 'QA', 'Automation'],
    githubUrl: 'https://github.com/martins-jojolola/api-testing-guide',
    featured: false
  }
]

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Sort by publishedAt date, newest first
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter(post => post.featured)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(post => post.slug === slug)
  return post || null
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return blogPosts.map(post => post.slug)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}