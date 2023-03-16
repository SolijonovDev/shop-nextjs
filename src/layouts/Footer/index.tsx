import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Text as="h4" className={styles.title} text="Online shoppping" align="center" />
        <Text as="p" text="2020 - 2023 Barcha huquqlar himoyalangan" align="center" />
      </Container>
    </footer>
  );
};
