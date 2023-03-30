import React from 'react';

import { Text } from '@/components/Text';
import { ProductCard } from '@/components/ProductCard';
import { catalogItems } from '@/fake-data/catalog';

import styles from './ContentPanel.module.scss';

export const ContentPanel = () => {
  return (
    <div className={styles.contentPanel}>
      <Text className={styles.title} as="h3" text="Mahsulotlar" />
      <div className={styles.items}>
        {catalogItems.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
