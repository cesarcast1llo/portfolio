import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import InitialAnimation from '../components/animations/InitialAnimation';

const PageWrapper = ({
  pageTitle,
  pageKeywords,
  bgColor,
  backgroundURL,
  children,
  height,
  clipPath,
  animation
}) => {
  return (
    <>
      <SEO title={pageTitle} keywords={pageKeywords} />
      <div
        className="background"
        style={{
          background: bgColor,
          backgroundImage: backgroundURL,
          height: height,
          clipPath: clipPath
        }}
      >
        <div className="name-intro">
          {animation ? <InitialAnimation animation={true} /> : null}
        </div>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
