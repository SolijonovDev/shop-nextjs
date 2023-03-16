import React, { FC } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

import { ILayoutProps } from './Layout.type';
import styles from './Layout.module.scss';

export const MainLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
