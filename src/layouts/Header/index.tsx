import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Link className={styles.logo} href="/">
            Shopping
          </Link>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/catalog">
              Catalog
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/news">
              Новости
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
        <div className={styles.leftPanel}>
          <Button>Sign up</Button>
        </div>
      </Container>
    </header>
  );
};
