import React from 'react';
import Header from './Header';
import SEO from './seo';
import Footer from './Footer';

const PageWrapper = ({
  pageTitle,
  pageKeywords,
  bgColor,
  backgroundURL,
  children,
  imageSrc
}) => (
  <>
    <SEO title={pageTitle} keywords={pageKeywords} />
    <div
      className="background"
      style={{
        backgroundColor: bgColor,
        backgroundImage: backgroundURL
      }}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
