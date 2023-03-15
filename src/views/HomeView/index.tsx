import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { HomeBanner } from './HomeBanner';

export const HomeView = () => {
  return (
    <div>
      <HomeBanner />
      <Container>
        <h1>HomeView</h1>
        <Text as="h1">Text h1 </Text>
        <Text as="h2">Text h2 </Text>
        <Text as="h3">Text h3</Text>
        <Text as="h4">Text h4</Text>
        <Text as="h5">Text h5</Text>
        <Text as="h6">Text h6</Text>
        <Text as="span">Text span</Text>
        <Text as="p">Text p</Text>
        <Text as="span" text="lorem ipsum" />
      </Container>
    </div>
  );
};
