import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import InitialAnimation from '../components/animations/InitialAnimation';

const PageWrapper = ({
  pageTitle,
  pageKeywords,
  children,
  cookies,
  bgColor,
  backgroundURL,
  className,
  animationText,
  headerHide
}) => {
  return (
    <>
      <SEO title={pageTitle} keywords={pageKeywords} />
      <div
        className={`background ${className}`}
        style={{ backgroundColor: bgColor, backgroundImage: backgroundURL }}
      >
        <div className={`name-intro ${animationText}`}>
          {cookies ? <InitialAnimation animation={true} /> : null}
        </div>
      </div>
      <Header headerHide={headerHide} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
