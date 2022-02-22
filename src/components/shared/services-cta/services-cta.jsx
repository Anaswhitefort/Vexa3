import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import Arrow from 'images/arrow.inline.svg';

const ServicesCTA = ({ title, linkText, linkUrl }) => (
  <section className="safe-paddings mt-52 bg-gray-2 py-40 lg:mt-44 lg:py-32 md:mt-36 md:py-24">
    <div className="container text-center text-6xl font-normal leading-snug lg:text-5xl md:text-3xl">
      <h2 className="mx-auto max-w-[800px] lg:max-w-[700px] md:max-w-[400px]">{title}</h2>
      <Link className="text-red" to={linkUrl}>
        {linkText}{' '}
        <Arrow className="ml-4 inline-block h-7 lg:ml-3 lg:h-6 md:ml-2 md:h-5" aria-hidden />
      </Link>
    </div>
  </section>
);

ServicesCTA.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default ServicesCTA;
