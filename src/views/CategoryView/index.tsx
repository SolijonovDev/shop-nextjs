import React from 'react';

import { Container } from '@/components/Container';
import { Sidebar } from './Sidebar';
import { ContentPanel } from './ContentPanel';
import { Header } from './Header';
import { BreadCrumb } from '@/components/BreadCrumb';

import styles from './CategoryView.module.scss';

const breadCrumbItems = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'Categories',
  },
];

export const CategoryView = () => {
  return (
    <div className={styles.categoryView}>
      <Container>
        <BreadCrumb items={breadCrumbItems} className={styles.breadCrumb} />
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <ContentPanel />
        </div>
      </Container>
    </div>
  );
};
