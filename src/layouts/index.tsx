import React, { FC, ReactNode } from 'react';

interface IMainLayout {
  children: ReactNode;
}

import styles from './Layout.module.scss';

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <h2>Header</h2>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};
