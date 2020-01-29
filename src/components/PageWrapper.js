import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';

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
