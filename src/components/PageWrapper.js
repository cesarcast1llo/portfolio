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
  height
}) => {
  return (
    <>
      <SEO title={pageTitle} keywords={pageKeywords} />
      <div
        className="background"
        style={{
          background: bgColor,
          backgroundImage: backgroundURL,
          height: height
        }}
      ></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
