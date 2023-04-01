import React from 'react';

import { Container } from '@/components/Container';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

import styles from './Header.module.scss';

export const Header = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        {isMobile && <MobileHeader />}
        {!isMobile && <DesktopHeader />}
      </Container>
    </header>
  );
};
