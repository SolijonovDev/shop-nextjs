import React from 'react';

import { Text } from '@/components/Text';

import styles from './ContentPanel.module.scss';
import { ProductCard } from '@/components/ProductCard';

const items = [
  {
    id: 1,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 2,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 3,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 4,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
  {
    id: 5,
    name: 'iPhone 13',
    src: '/images/iphone13.jpg',
  },
];

export const ContentPanel = () => {
  return (
    <div className={styles.contentPanel}>
      <Text className={styles.title} as="h3" text="Mahsulotlar" />
      <div className={styles.items}>
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
