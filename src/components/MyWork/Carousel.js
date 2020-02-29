import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { UncontrolledCarousel } from 'reactstrap';
import wordpress from '../../assets/images/logos/wordpress.png';

const images = [
  {
    key: '1',
    src: { wordpress },
    caption: 'json to pull files'
  },
  {
    key: '2',
    src: { wordpress },
    caption: 'captcha for securioty to pull files'
  }
];

const Carousel = ({ children }) => (
  <div>
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="cmon">
            {data.allDataJson.edges.map(({ node }) => (
              <div key={node.job}>
                <h1>{node.job}</h1>
                <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="_"
                  className="project-image"
                />
                <h1>{node.description}</h1>
                <UncontrolledCarousel
                  interval={false}
                  indicators={false}
                  items={images}
                />
              </div>
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
          description
          images {
            caption
            src
          }
        }
      }
    }
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "hero.png" }
    ) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Carousel;
