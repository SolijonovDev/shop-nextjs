import React, { FC } from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import { ILayoutProps } from './Layout.type';
import styles from './Layout.module.scss';
import { Header } from './Header';

export const MainLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Container>
          <Text as="h4" align="center">
            Footer
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum, explicabo
            veritatis nihil praesentium saepe velit sed repellat, incidunt tempora voluptates. Neque
            minus id laudantium, veniam fuga esse officiis excepturi illo amet, fugiat iure, ad
            tenetur cumque vel.
          </Text>
        </Container>
      </footer>
    </div>
  );
};
