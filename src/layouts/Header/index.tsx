import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import styles from './Header.module.scss';

const menuItems = [
  { id: 1, name: 'Catalog', pathName: '/catalog' },
  {
    id: 2,
    name: 'Yangiliklar',
    pathName: '/news',
  },
  {
    id: 3,
    name: 'Aloqa',
    pathName: '/contacts',
  },
  {
    id: 4,
    name: 'Tanlanganlar',
    pathName: '/favorites',
  },
  {
    id: 5,
    name: 'Savatcha',
    pathName: '/basket',
  },
];

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
          {menuItems.map(({ id, name, pathName }) => (
            <li className={styles.menuItem} key={id}>
              <Link className={styles.menuItemLink} href={pathName}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.leftPanel}>
          <Button>Sign up</Button>
        </div>
      </Container>
    </header>
  );
};
