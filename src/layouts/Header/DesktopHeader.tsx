import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { Button } from '@/components/Button';
import { navItems } from '@/config/nav';
import { useSignIn } from '../SignInProvider';

import styles from './DesktopHeader.module.scss';

export const DesktopHeader = () => {
  const { showSignInPopup } = useSignIn();
  const { asPath } = useRouter();

  return (
    <div className={styles.desktopHeader}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} href="/">
          Shopping
        </Link>
      </div>
      <ul className={styles.menu}>
        {navItems.map(({ id, name, pathName }) => (
          <li className={styles.menuItem} key={id}>
            <Link
              className={cn(styles.menuItemLink, {
                [styles.active]: pathName === asPath,
              })}
              href={pathName}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.leftPanel}>
        <Button onClick={showSignInPopup}>Sign In</Button>
      </div>
    </div>
  );
};
