import React, { Fragment } from 'react';

import { HomeBanner } from './HomeBanner';
import { Sections } from './Sections';
import { Container } from '@/components/Container';

export const HomeView = () => {
  return (
    <Fragment>
      <Container>
        <HomeBanner />
        <Sections />
      </Container>
    </Fragment>
  );
};
