import React from 'react';

import CodeQuality from 'components/pages/services-web-development/code-quality';
import Frameworks from 'components/pages/services-web-development/frameworks';
import Hero from 'components/pages/services-web-development/hero';
import Lighthouse from 'components/pages/services-web-development/lighthouse';
import Tailwindcss from 'components/pages/services-web-development/tailwindcss';
import ThirdPartiesAndIntegrations from 'components/pages/services-web-development/third-parties-and-integrations';
// import Blog from 'components/shared/blog';
import CaseStudies from 'components/shared/case-studies';
import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import ServicesCTA from 'components/shared/services-cta';
import SEO_DATA from 'constants/seo-data';

const servicesCTA = {
  title: 'Still in doubts? Check out what we have to offer on',
  linkText: 'Design services',
  linkUrl: '/services/web-design',
};

const ServicesWebDevelopmentPage = () => (
  <Layout seo={SEO_DATA.servicesWebDevelopment} headerTheme="white">
    <Hero />
    <Frameworks />
    <Tailwindcss />
    <CodeQuality />
    <ThirdPartiesAndIntegrations />
    <Lighthouse />
    <CaseStudies
      title="There are numerous living proofs of our work out there."
      itemsType="open-source"
    />
    {/* <Blog /> */}
    <ServicesCTA {...servicesCTA} />
    <CTA />
  </Layout>
);

export default ServicesWebDevelopmentPage;
