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
      {/* <div className="page-404">
        <div className="center">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... oh the sadness.</p>
        </div>
      </div> */}

      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* change code below this line */}
        <List tasks={['walk dog', 'workout']} />
        <h2>Tomorrow</h2>
        <List tasks={['walk dog', 'workout', 'asdas']} />
        {/* change code above this line */}
      </div>
    </PageWrapper>
  </>
);

export default NotFoundPage;
