import React from 'react';
import Data from '../../pages/data.json';
import { UncontrolledCarousel } from 'reactstrap';

const images = [
  {
    key: `${Data.portfolio.jobs[0].first.key}`,
    src: `${Data.portfolio.jobs[0].first.src}`,
    caption: `${Data.portfolio.jobs[0].first.caption}`,
    header: ' ',
    atText: `${Data.portfolio.jobs[0].altText}`
  },
  {
    key: `${Data.portfolio.jobs[0].second.key}`,
    src: `${Data.portfolio.jobs[0].second.src}`,
    caption: `${Data.portfolio.jobs[0].second.caption}`,
    header: ' ',
    altText: `${Data.portfolio.jobs[0].altText}`
  },
  {
    key: `${Data.portfolio.jobs[0].third.key}`,
    src: `${Data.portfolio.jobs[0].third.src}`,
    caption: `${Data.portfolio.jobs[0].third.caption}`,
    header: ' ',
    atText: `${Data.portfolio.jobs[0].altText}`
  },
  {
    key: `${Data.portfolio.jobs[0].fourth.key}`,
    src: `${Data.portfolio.jobs[0].fourth.src}`,
    caption: `${Data.portfolio.jobs[0].fourth.caption}`,
    header: ' ',
    altText: `${Data.portfolio.jobs[0].altText}`
  }
];

const Carousel = () => (
  <UncontrolledCarousel interval={false} indicators={false} items={images} />
);

export default Carousel;
