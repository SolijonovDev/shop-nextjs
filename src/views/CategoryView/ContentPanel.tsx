import React, { useEffect } from 'react';

import { Text } from '@/components/Text';
import { ProductCard } from '@/components/ProductCard';
import { categoryItems } from '@/fake-data/catalog';

import styles from './ContentPanel.module.scss';
import { useRouter } from 'next/router';

export const ContentPanel = () => {
  const { query } = useRouter();
  const { c: categoryName = 'books' } = query;
  return (
    <div className={styles.contentPanel}>
      <div className={styles.items}>
        {
          //@ts-ignore
          categoryItems[categoryName].map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};
