import React from 'react';
import { Container } from '@/components/Container';
import { HomeBanner } from './HomeBanner';

export const HomeView = () => {
  return (
    <div>
      <HomeBanner />
      <Container>
        <h1>HomeView</h1>
      </Container>
    </div>
  );
};
