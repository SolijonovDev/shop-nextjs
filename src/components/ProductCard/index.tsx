import React, { FC } from 'react';
import Link from 'next/link';

import { Text } from '@/components/Text';

import { IProductCardProps } from './ProductCard.type';
import styles from './ProductCard.module.scss';

const defaultImgSrc =
  'https://images.uzum.uz/cf96h62vtie1lhbhhskg/t_product_540_high.jpg#1679910640226';

export const ProductCard: FC<IProductCardProps> = ({ item }) => {
  const { src = defaultImgSrc, name = 'product', price = '7 000 000' } = item;
  return (
    <Link href="/details/7118" key={item.id} className={styles.productCard}>
      <div className={styles.productCardImg}>
        <img className={styles.img} src={src} alt={name} />
      </div>
      <div className={styles.body}>
        <Text as="p" className={styles.productName} align="left" text={name} />
        <Text as="p" align="left" text={`${price} so'm`} />
      </div>
    </Link>
  );
};
