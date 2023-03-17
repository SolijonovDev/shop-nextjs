import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Sidebar } from './Sidebar';
import { ContentPanel } from './ContentPanel';

import styles from './CatalogView.module.scss';

export const CatalogView = () => {
  return (
    <div className={styles.catalogView}>
      <Container>
        <Text as="p" text="Bread cream" />
        <div className={styles.content}>
          <Sidebar />
          <ContentPanel />
        </div>
      </Container>
    </div>
  );
};
