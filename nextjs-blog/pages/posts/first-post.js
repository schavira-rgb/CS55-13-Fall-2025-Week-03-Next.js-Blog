import Script from 'next/script'; // Import Script component for loading scripts
import Head from 'next/head'; // Import Head component for metadata
import Link from 'next/link'; // Import Link component for navigation
import Layout from '../../components/layout'; // Import Layout component for layout
 
export default function FirstPost() { // Define and export FirstPost component function
  return ( // Return JSX content
    <>
      <Head> // Add metadata to the page
        <title>First Post</title> // Add title to the page
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => // Arrow function to execute after script loads
          console.log(`script loaded correctly, window.FB has been populated`) // Log success message to console
        } // End onLoad function
      /> 
      <h1>First Post</h1> // Add content to the page
      <h2>
        <Link href="/">← Back to home</Link> // Add navigation link
      </h2>
    </>
  ); // End return statement
} // End component function