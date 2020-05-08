import React from 'react';
import PageWrapper from '../components/PageWrapper.js';

const NotFoundPage = () => (
  <>
    <PageWrapper
      pageTitle="404"
      pageKeywords={[
        `Cesar Castillo Portfolio`,
        `gatsby`,
        `application`,
        `404`,
        `Cesar Castillo`,
      ]}
      footerHide="none"
    >
      <div className="page-404">
        <div className="center">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... oh the sadness.</p>
        </div>
      </div>
    </PageWrapper>
  </>
);

export default NotFoundPage;
