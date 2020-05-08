import React from 'react';
import Header from '../components/pageWrapper//header';
import SEO from './seo';
import { Helmet } from 'react-helmet';
import Footer from '../components/pageWrapper//footer';
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
  headerHide,
  footerHide,
  background,
}) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Helmet>
      <SEO title={pageTitle} keywords={pageKeywords} />
      <div
        className={`${background} ${className}`}
        style={{ backgroundColor: bgColor, backgroundImage: backgroundURL }}
      >
        <div className="hero-bg"></div>

        <div className={`name-intro ${animationText}`}>
          {cookies ? <InitialAnimation animation={true} /> : null}
        </div>
      </div>
      <Header headerHide={headerHide} />
      <main>{children}</main>
      <Footer footerHide={footerHide} />
    </>
  );
};

export default PageWrapper;
