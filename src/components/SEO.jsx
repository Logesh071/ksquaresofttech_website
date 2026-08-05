import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>
        KSquare Softtech
      </title>

      <meta
        name="description"
        content="KSquare Softtech is one of the leading IT Training and Software Development companies in Coimbatore. We provide Full Stack Development, Python, Data Science, Artificial Intelligence, Web Development, Digital Marketing, Internships, and Placement Assistance."
      />

      <meta
        name="keywords"
        content="KSquare Softtech, Full Stack Development Course Coimbatore, MERN Stack Training, Python Course Coimbatore, Data Science Course, AI Training, Web Development Company, Internship Coimbatore, React JS Course, Node JS Course, MongoDB Training, Software Training Institute Coimbatore"
      />

      <meta name="author" content="KSquare Softtech" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://www.ksquaresofttech.com/" />

      {/* Open Graph */}

      <meta property="og:title" content="KSquare Softtech" />

      <meta
        property="og:description"
        content="Best IT Training Institute & Software Development Company in Coimbatore."
      />

      <meta
        property="og:image"
        content="https://www.ksquaresofttech.com/logo.png"
      />

      <meta property="og:url" content="https://www.ksquaresofttech.com/" />

      <meta property="og:type" content="website" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content="KSquare Softtech" />

      <meta
        name="twitter:description"
        content="IT Training & Software Development Company in Coimbatore."
      />
    </Helmet>
  );
}

export default SEO;
