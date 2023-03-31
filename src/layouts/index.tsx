import React, { FC } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { SignInProvider } from './SignInProvider/index';

import { ILayoutProps } from './Layout.type';

import styles from './Layout.module.scss';

export const MainLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <SignInProvider>
      <div className={styles.mainLayout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </SignInProvider>
  );
};
