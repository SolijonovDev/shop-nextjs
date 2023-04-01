import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import { useSignIn } from '../SignInProvider';
import { navItems } from '@/config/nav';

import styles from './Header.module.scss';

export const Header = () => {
  const { showSignInPopup } = useSignIn();
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Link className={styles.logo} href="/">
            Shopping
          </Link>
        </div>
        <ul className={styles.menu}>
          {navItems.map(({ id, name, pathName }) => (
            <li className={styles.menuItem} key={id}>
              <Link className={styles.menuItemLink} href={pathName}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.leftPanel}>
          <Button onClick={showSignInPopup}>Sign In</Button>
        </div>
      </Container>
    </header>
  );
};
