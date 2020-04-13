import React from 'react';
import PageWrapper from '../components/PageWrapper.js';
import { Container, Row, Col } from 'reactstrap';

const Emails = () => (
  <PageWrapper
    pageTitle="Email Portal"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="blue"
    // backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
    <Container className="email-portal-container">
      <Row>
        <Col className="email-portal">
          <div class="intro">HTML Emails</div>
          <div class="description">
            All emails have been checked for HTML validation, tested on Email on
            Acid/Litmus for desktop and mobile responsiveness, and locally
            tested on multiple browsers before&nbsp;desployment.
          </div>
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

export default Emails;
