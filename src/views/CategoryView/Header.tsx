import { Text } from '@/components/Text';
import React from 'react';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Text className={styles.title} as="h4" text="Category" />
      <div className={styles.filter}>
        <Text className={styles.saralash} as="h6" text="Saralash" />
        <Text as="h6" text="Ommabop" />
      </div>
    </div>
  );
};
