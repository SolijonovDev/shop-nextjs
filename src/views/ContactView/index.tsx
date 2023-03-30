import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './ContactView.module.scss';

export const ContactView = () => {
  return (
    <div className={styles.contactView}>
      <Container>
        <Text as="h2" text="Contact View" />
      </Container>
    </div>
  );
};
