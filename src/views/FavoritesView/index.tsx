import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './FavoritesView.module.scss';

export const FavoritesView = () => {
  return (
    <div className={styles.favoritesView}>
      <Container>
        <Text as="h2" align="center" text="Tanlanganlar mahsulotlar topilmadi" />
      </Container>
    </div>
  );
};
