import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

import styles from './DetailsView.module.scss';

export const DetailsView = () => {
  return (
    <div className={styles.detailsView}>
      <Container className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/images/iphone13.jpg" alt="iPhone 13" />
        </div>
        <div className={styles.infos}>
          <Text className={styles.productName} as="h4" text="Name: iPhone 13" />
          <Text className={styles.productPrice} as="p" text="Narxi: 7 800 000 so'm" />
          <Text className={styles.status} as="p" text="Xolati: Yangi" />
          <Button>Sotib olish</Button>
        </div>
      </Container>
      <p>Other customers have also bought</p>
      <p>Related</p>
    </div>
  );
};
