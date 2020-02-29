import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import { UncontrolledCarousel } from 'reactstrap';
// import { node } from 'prop-types';

const Carousel = ({ children }) => (
  <div>
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="cmon">
            {data.allDataJson.edges.map(({ node }) => (
              <h1 key={node.id}>{node.job}</h1>
            ))}
          </div>
        );
      }}
    />
  </div>
);

const query = graphql`
  query json {
    allDataJson {
      edges {
        node {
          job
          id
        }
      }
    }
  }
`;

export default Carousel;
