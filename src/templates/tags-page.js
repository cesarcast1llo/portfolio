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
      {tags.map(tag => (
        <li key={tag} style={{ marginBottom: '10px' }}>
          <Button color="primary" href={`/tags/${slugify(tag)}`}>
            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
          </Button>
        </li>
      ))}
      {/* TODO watch unique key prop error, also lowercase all; URLs */}
      {/* working, /tags */}
    </Layout>
  );
};

export default tagsPage;
