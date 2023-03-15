import React, { FC, ReactNode } from 'react';

interface IBannerItemProps {
  children: ReactNode;
  imgSrc: string;
}

import styles from './BannerItem.module.scss';
import { Container } from '@/components/Container';

export const BannerItem: FC<IBannerItemProps> = ({ imgSrc, children }) => {
  return (
    <div className={styles.bannerItem}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} className={styles.img} />
      </div>
      <div className={styles.content}>
        <Container>
          <div>{children}</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla, odit sit ab accusamus
            eius tempore sed inventore autem tempora, aliquam dignissimos dolorum debitis deserunt
            minima nobis iure totam rerum deleniti quisquam nostrum veniam atque quaerat. Magni,
            quia eum repellendus quam necessitatibus a id ipsam accusamus quis molestiae, dicta fuga
            voluptatibus distinctio veniam sequi labore quae. Fugit optio magnam eligendi eos soluta
            id ullam, quam sunt, facere minus adipisci assumenda. Quaerat modi excepturi velit hic
            animi nesciunt, iure ratione dignissimos.
          </p>
          <h4 style={{ marginTop: '20px' }}>Lorem ipsum dolor sit.</h4>
        </Container>
      </div>
    </div>
  );
};
