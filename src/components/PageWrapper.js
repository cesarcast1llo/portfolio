import React from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import Typed from 'react-typed';

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
    >
      <div className="typed-wrapper">
        <Typed
          class="info"
          strings={['Hello', 'Hola', 'Bonjour', 'Olá', 'Gluten Tag']}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </Typed>
      </div>
    </div>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
