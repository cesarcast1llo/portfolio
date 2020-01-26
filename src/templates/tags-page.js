import React from 'react';
import { Link } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import { Container, Row, Col, Badge, Button } from 'reactstrap';
import { slugify } from '../utils/utilityFunctions';

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <PageWrapper
      pageTitle="Tags"
      pageKeywords={['tags', 'topics']}
      bgColor="#3d3e3d"
      backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
    >
      <Container className="tags-page-container">
        <Row>
          <Col className="tags-wrapper">
            <div className="tags-intro">
              <p>All Tags - totalTags here</p>
              <h3>i am going to loop of final tags and put it above</h3>
            </div>
            <div className="tags">
              {tags.map(tag => (
                <Link to={`/tags/${slugify(tag)}`}>
                  <Button key={tag} color="primary" className="tag-button">
                    {tag} -{' '}
                    <Badge className="number">{tagPostCounts[tag]}</Badge>
                  </Button>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default tagsPage;
