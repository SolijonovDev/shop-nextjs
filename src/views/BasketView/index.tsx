import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './BasketView.module.scss';

export const BasketView = () => {
  return (
    <div className={styles.basketView}>
      <Container>
        <Text as="h2" align="center" text="Mahsulot topilmadi" />
      </Container>
    </div>
  );
};
