import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col md="12">
          <div style={{ textAlign: 'center' }}>
            <h1>2020</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div>
            <h2 style={{ textDecoration: 'underline', textAlign: 'center' }}>
              DEV
            </h2>
            <h3>Advance in..</h3>
            <details>
              <summary>Javascript</summary>
              <ul>
                <li>ES6 functions</li>
                <li>
                  Mastering all functions - loop, switch, operators, data types,
                  etc
                </li>
              </ul>
            </details>
            <details>
              <summary>React.js</summary>
              <ul>
                <li>Async function</li>
                <li>Promises</li>
                <li>
                  implement basic states, props, bind(), etc without looking for
                  proper syntax
                </li>
              </ul>
            </details>
            <details>
              <summary>Node.js</summary>
              <ul>
                <li>Using Express</li>
                <li>Setting up Node without looking at references/tutorials</li>
                <li>
                  Set up backend server and client server, server side & client
                  side all in one app
                </li>
              </ul>
            </details>
            <br />
            <h3>Practice above skills on..</h3>
            <details>
              <summary>Side Projects</summary>
              <ul>
                <li>Finish JCC website using Next.js by March 2020</li>
                <li>Finish Portfolio using Gatsby.js by February 17th</li>
                <li>
                  Create & Finish FPT work site using DB to store assets for
                  everyone to use
                </li>
              </ul>
            </details>
            <details>
              <summary>Learning New Frameworks</summary>
              <ul>
                <li>Vue.js</li>
                <li>Gatsby.js</li>
                <li>Any Front-End library or framework emerging</li>
              </ul>
            </details>
            <br />
            <h3>Attend..</h3>
            <details>
              <summary>Conferences</summary>
              <ul>
                <li>JS Workshop February 13</li>
                <li>Dev meetups</li>
                <li>Always network and look for opportunities to progress</li>
              </ul>
            </details>
          </div>
        </Col>
        <br />
        <Col md="6">
          <div>
            <h2 style={{ textDecoration: 'underline', textAlign: 'center' }}>
              Myself
            </h2>
            <h3>Financial</h3>
            <details>
              <summary>Money</summary>
              <ul>
                <li>Find multiple streams of income</li>
                <li>Reduce all debt, then invest</li>
                <li>Find true assets worth attaining, not liabilities</li>
                <li>Limit spending / be frugal</li>
                <li>Be making at least 90k by end of 2020</li>
              </ul>
            </details>
            <br />
            <h3>Body</h3>
            <details>
              <summary>Health</summary>
              <ul>
                <li>Gym / Cardio at least 5 days a week</li>
                <li>Proper recovery to be able to withstand all activities</li>
                <li>
                  Eat well, feed yourself what your body needs to have it be
                  functioning 150%
                </li>
                <li>Proper sleep. Minimum 7 hours a day</li>
              </ul>
            </details>
            <details>
              <summary>Mind</summary>
              <ul>
                <li>Read at least 3 books every 6 months</li>
                <li>Meditate at least twice a day</li>
                <li>Do not waste time on unecessary things on your phone</li>
                <li>Invest your time where you will see a return</li>
              </ul>
            </details>
          </div>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <Link to="/blog/">Developing Blog</Link>
  </Layout>
);

export default IndexPage;
