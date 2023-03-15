import React, { FC, ReactNode } from 'react';

interface IMainLayout {
  children: ReactNode;
}

import styles from './Layout.module.scss';
import { Container } from '@/components/Container';

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <Container>
          <h2>Header</h2>
        </Container>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Container>
          <h2>Footer</h2>
        </Container>
      </footer>
    </div>
  );
};
