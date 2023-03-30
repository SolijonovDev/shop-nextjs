import React, { FC } from 'react';

// import { Container } from '@/components/Container';

import { IBannerItemProps } from './BannerItem.type';
import styles from './BannerItem.module.scss';
// import { Text } from '@/components/Text';

export const BannerItem: FC<IBannerItemProps> = ({ imgSrc }) => {
  return (
    <div className={styles.bannerItem}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} className={styles.img} />
      </div>
    </div>
  );
};
