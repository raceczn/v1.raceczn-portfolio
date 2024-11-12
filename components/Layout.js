import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from 'next/script'; // Import Script component from next/script

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Rances Cuizon</title>
        <meta name="description" content="I design and develop things for mobile and web." />
        <meta property="og:url" content="https://rancesczn.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rances Cuizon | Website Portfolio" />
        <meta property="og:description" content="I design and develop things for mobile and web." />
        <meta property="og:image" content="https://rancesczn.vercel.app/#About" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rances Cuizon",
            "url": "https://rancesczn.vercel.app/",
            "sameAs": [
              "https://www.linkedin.com/in/rances-cuizon-ab5144338/",
              "https://github.com/raceczn"
            ],
            "jobTitle": "Mobile & Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Student"
            }
          })}
        </script>
      </Head>

      <Navbar />

      {/* Main Content */}
      <main>{children}</main>

      <Footer />

      {/* Load the AddThis script asynchronously */}
      <Script
        type="text/javascript"
        src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f7f58712a3f9f85"
        strategy="afterInteractive" // Ensure it loads after the page becomes interactive
      />
    </div>
  );
};

export default Layout;
