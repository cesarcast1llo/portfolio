import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import InitialAnimation from '../components/animations/InitialAnimation';

const PageWrapper = ({
  pageTitle,
  pageKeywords,
  children,
  animation,
  className,
  nameClassName
}) => {
  return (
    <>
      <SEO title={pageTitle} keywords={pageKeywords} />
      <div className={`background ${className}`}>
        <div className={`name-intro ${nameClassName}`}>
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
