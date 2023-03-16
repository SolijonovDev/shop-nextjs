import React, { Fragment } from 'react';

import { HomeBanner } from './HomeBanner';
import { FeaturesPanel } from './Features';
import { Sections } from './Sections';

export const HomeView = () => {
  return (
    <Fragment>
      <HomeBanner />
      <FeaturesPanel />
      <Sections />
    </Fragment>
  );
};
