import Head from 'next/head'; // Import Head component for metadata
import Link from 'next/link'; // Import Link component for navigation
import Layout from '../../components/layout'; // Import Layout component
import customStyles from '../../styles/CustomPost.module.css'; // Import custom post styles

export default function FirstPost() { // Define and export FirstPost component function
  return ( // Return JSX content
    <Layout>
      <Head>
        <title>My Next.js Learning Journey</title>
      </Head>
      
      <article className={customStyles.articleContainer}>
        <header className={customStyles.articleHeader}>
          <h1 className={customStyles.articleTitle}>My Next.js Learning Journey</h1>
          <div className={customStyles.articleMeta}>
            <span className={customStyles.metaItem}>September 5, 2025</span>
            <span className={customStyles.metaItem}>5 min read</span>
            <span className={customStyles.metaItem}>Web Development</span>
          </div>
        </header>

        <div className={customStyles.articleContent}>
          <p>
            Welcome to my first blog post! As a cybersecurity student diving into server-side web development, 
            I wanted to share my experience learning Next.js and how it fits into my broader understanding of web security.
          </p>

          <h2>Why Server-Side Development Matters for Security</h2>
          <p>
            Coming from a cybersecurity background, I've learned that understanding how applications work on the server side 
            is crucial for identifying vulnerabilities and implementing proper security measures. Next.js provides an excellent 
            foundation for building secure, performant web applications.
          </p>

          <h2>Key Features I've Discovered</h2>
          <p>
            Throughout this tutorial, I've been impressed by several aspects of Next.js:
          </p>
          <ul>
            <li><strong>File-based routing:</strong> Intuitive and organized approach to creating pages</li>
            <li><strong>Built-in optimization:</strong> Automatic code splitting and image optimization</li>
            <li><strong>CSS flexibility:</strong> Support for CSS Modules, global styles, and more</li>
            <li><strong>API routes:</strong> Full-stack development capabilities in one framework</li>
            <li><strong>Security features:</strong> Built-in protections and best practices</li>
          </ul>

          <h2>From Security+ to Web Development</h2>
          <p>
            My Security+ certification taught me to think about systems holistically - understanding not just how to use 
            technology, but how it works and where vulnerabilities might exist. This mindset has been invaluable as I learn 
            web development, helping me appreciate the security implications of different coding practices and architectural decisions.
          </p>

          <h2>Looking Forward</h2>
          <p>
            As I continue my studies in cybersecurity and web development, I'm excited to explore how these fields intersect. 
            Understanding both the development and security sides will make me a more effective cybersecurity professional.
          </p>
        </div>

        <div className={customStyles.navigationSection}>
          <Link href="/" className={customStyles.navButton}>
            <span className={customStyles.backArrow}>←</span>
            Back to Home Page
          </Link>
        </div>
      </article>
    </Layout>
  ); // End return statement
} // End component function