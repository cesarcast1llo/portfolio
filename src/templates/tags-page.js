import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { Badge, Button } from 'reactstrap';
import { slugify } from '../utils/utilityFunctions';

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <Layout pageTitle="All Blog Post Tags and Topics">
      <SEO
        title="All Blog Post Tags and Topics"
        keywords={['tags', 'topics']}
      />
      TAGSS
      {console.log(tags)}
      {tags.map(tag => (
        <li key={tag} style={{ marginBottom: '10px' }}>
          <Link to={`/tags/${slugify(tag)}`}>
            <Button color="primary">
              {/* {tagCapital(tag)}{' '} */}
              {/* loop before posting tags, need to delete duplicates
              component will mount? */}
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </Link>
        </li>
      ))}
    </Layout>
  );
};

export default tagsPage;
