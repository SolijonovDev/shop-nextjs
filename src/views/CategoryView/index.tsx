import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Sidebar } from './Sidebar';
import { ContentPanel } from './ContentPanel';

import { Header } from './Header';

import styles from './CategoryView.module.scss';

export const CategoryView = () => {
  return (
    <div className={styles.categoryView}>
      <Container>
        <Text as="p" text="Bread cream" />
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <ContentPanel />
        </div>
      </Container>
    </div>
  );
};
