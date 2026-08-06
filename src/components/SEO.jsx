import { Helmet } from "react-helmet-async";

function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",

    name: "KSquare Softtech",

    url: "https://ksquaresofttech.org",

    logo: "https://ksquaresofttech.org/logo.png",

    image: "https://ksquaresofttech.org/og-image.jpg",

    description:
      "KSquare Softtech is a Software Development Company in Coimbatore providing Website Development, Mobile App Development, Custom Software Development, CRM, ERP, Digital Marketing, SEO, AI Solutions and IT Training.",

    telephone: "+91-7010798196",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },

    areaServed: "India",

    priceRange: "₹₹",

    foundingDate: "2025",

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Development Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Python Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Science Training",
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <html lang="en" />

      <title>
        KSquare Softtech | Software Development Company in Coimbatore
      </title>

      <meta charSet="UTF-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <meta
        name="description"
        content="KSquare Softtech is a leading Software Development Company in Coimbatore offering Website Development, Mobile App Development, Digital Marketing, SEO, AI Solutions, Full Stack Development, Python, Data Science and Internship Programs."
      />

      <meta
        name="keywords"
        content="KSquare Softtech, Software Company Coimbatore, Website Development Company Coimbatore, Web Design Company, Mobile App Development, Custom Software Development, CRM Software, ERP Software, React JS Development, MERN Stack Development, AI Development, Digital Marketing Company, SEO Company, Python Training, Data Science Course, Full Stack Development Course, Internship Coimbatore"
      />

      <meta name="author" content="KSquare Softtech" />

      <meta
        name="robots"
        content="index,follow,max-image-preview:large"
      />

      <meta
        name="theme-color"
        content="#0D6EFD"
      />

      <link
        rel="canonical"
        href="https://ksquaresofttech.org/"
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="KSquare Softtech"
      />

      <meta
        property="og:title"
        content="KSquare Softtech | Software Development Company"
      />

      <meta
        property="og:description"
        content="Website Development, Mobile Apps, Software Development, Digital Marketing, AI Solutions and IT Training."
      />

      <meta
        property="og:url"
        content="https://ksquaresofttech.org/"
      />

      <meta
        property="og:image"
        content="https://ksquaresofttech.org/og-image.jpg"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="KSquare Softtech"
      />

      <meta
        name="twitter:description"
        content="Software Development Company in Coimbatore"
      />

      <meta
        name="twitter:image"
        content="https://ksquaresofttech.org/og-image.jpg"
      />

      {/* Geo Tags */}

      <meta
        name="geo.region"
        content="IN-TN"
      />

      <meta
        name="geo.placename"
        content="Coimbatore"
      />

      <meta
        name="geo.position"
        content="11.0168;76.9558"
      />

      <meta
        name="ICBM"
        content="11.0168,76.9558"
      />

      {/* JSON-LD Schema */}

      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}

export default SEO;