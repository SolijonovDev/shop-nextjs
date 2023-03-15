import React, { FC } from 'react';

import { Container } from '@/components/Container';

import { IBannerItemProps } from './BannerItem.type';
import styles from './BannerItem.module.scss';
import { Text } from '@/components/Text';

export const BannerItem: FC<IBannerItemProps> = ({ imgSrc, children }) => {
  return (
    <div className={styles.bannerItem}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} className={styles.img} />
      </div>
      <div className={styles.content}>
        <Container>
          <div>{children}</div>
          <Text as="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit.</Text>
          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla, odit sit ab accusamus
            eius tempore sed inventore autem tempora, aliquam dignissimos dolorum debitis deserunt
            minima nobis iure totam rerum deleniti quisquam nostrum veniam atque quaerat. Magni,
            quia eum repellendus quam necessitatibus a id ipsam accusamus quis molestiae, dicta fuga
            voluptatibus distinctio veniam sequi labore quae. Fugit optio magnam eligendi eos soluta
            id ullam, quam sunt, facere minus adipisci assumenda. Quaerat modi excepturi velit hic
            animi nesciunt, iure ratione dignissimos.
          </Text>
          <Text as="h4">Lorem ipsum dolor sit.</Text>
        </Container>
      </div>
    </div>
  );
};
