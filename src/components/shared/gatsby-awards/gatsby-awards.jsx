import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import FinalistBestAgency from './images/finalist-best-agency.inline.svg';
import FinalistBestSiteDesign from './images/finalist-best-site-design.inline.svg';

const GatsbyAwards = ({ className, theme }) => (
  <section
    className={clsx(
      'safe-paddings mt-40 lg:mt-32 sm:mt-20',
      theme === 'black' && 'text-black',
      theme === 'white' && 'text-white',
      className
    )}
  >
    <div className="container">
      <h2 className="text-center text-2xl font-normal sm:text-xl">
        Unlock design process with benefits you wouldn’t want to lose:
      </h2>
      <ul className="mt-14 flex items-center justify-center lg:mt-10 sm:mt-8 sm:block sm:space-y-8">
        <li>
          <FinalistBestAgency className="h-18 lg:h-14 md:h-10 sm:mx-auto" />
        </li>
        <li
          className={clsx(
            'ml-14 border-l pl-14 lg:ml-10 lg:pl-10 sm:ml-0 sm:border-0 sm:pl-0',
            theme === 'black' && 'border-l-gray-4',
            theme === 'white' && 'border-l-gray-8'
          )}
        >
          <FinalistBestSiteDesign className="h-18 lg:h-14 md:h-10 sm:mx-auto" />
        </li>
      </ul>
    </div>
  </section>
);

GatsbyAwards.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['black', 'white']).isRequired,
};

GatsbyAwards.defaultProps = {
  className: null,
};

export default GatsbyAwards;
