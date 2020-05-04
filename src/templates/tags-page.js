import React from 'react';
import { Link } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { slugify } from '../utils/utilityFunctions';

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <PageWrapper pageTitle="Tags" pageKeywords={['tags', 'topics']}>
      <Container className="tags-page-container">
        <Row>
          <Col className="tags-wrapper">
            <div className="tags-intro">
              <p>All Tags - totalTags here</p>

              <h3>i am going to loop of final tags and put it above</h3>
              <div className="tags">
                {tags.map(function(tag, index) {
                  return index % 2 === 0 ? (
                    <Link key={tag} to={`/tags/${slugify(tag)}`}>
                      <Button color="primary" className="tag-button">
                        {tag} <div className="number">{tagPostCounts[tag]}</div>
                      </Button>
                    </Link>
                  ) : (
                    <Link key={tag} to={`/tags/${slugify(tag)}`}>
                      <Button color="primary" className="odd">
                        {tag} <div className="number">{tagPostCounts[tag]}</div>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default tagsPage;
