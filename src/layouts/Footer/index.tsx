import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.leftPanel}>
          <Text as="span" className={styles.text} text="Maxfiylik kelishuvi" />
          <Text as="span" className={styles.text} text="Foydalanuvchi kelishuvi" />
        </div>
        <div className={styles.rightPanel}>
          <Text className={styles.text} as="span" text="2023 Barcha huquqlar himoyalangan" />
        </div>
      </Container>
    </footer>
  );
};
