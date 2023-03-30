import React, { FC } from 'react';
import Link from 'next/link';

import { Text } from '@/components/Text';

import { IProductCardProps } from './ProductCard.type';
import styles from './ProductCard.module.scss';

export const ProductCard: FC<IProductCardProps> = ({ item }) => {
  return (
    <Link href="/details/7118" key={item.id} className={styles.productCard}>
      <div className={styles.productCardImg}>
        <img
          className={styles.img}
          src={'https://images.uzum.uz/cf96h62vtie1lhbhhskg/t_product_540_high.jpg#1679910640226'}
          alt={item.name}
        />
      </div>
      <Text as="p" className={styles.productName} align="left" text={item.name} />
      <Text as="p" align="left" text={"6 800 000 so'm"} />
    </Link>
  );
};
