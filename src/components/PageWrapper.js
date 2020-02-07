import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import InitialAnimation from './animations/InitialAnimation';

const PageWrapper = ({
  pageTitle,
  pageKeywords,
  bgColor,
  backgroundURL,
  children,
  height,
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
          height: height
        }}
      >
        {animation ? (
          <div className="name-intro">
            {console.log(animation + ' activate')}
            <InitialAnimation />
          </div>
        ) : null}
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
