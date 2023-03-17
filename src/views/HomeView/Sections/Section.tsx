import React, { FC } from 'react';
import Link from 'next/link';

import { Text } from '@/components/Text';

import styles from './Section.module.scss';
import { ProductCard } from '@/components/ProductCard';

interface ISectionProps {
  title: string;
}

const sectionItems = [
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
];

export const Section: FC<ISectionProps> = ({ title }) => {
  return (
    <div className={styles.section}>
      <Text className={styles.title} as="h3" text={title} />
      <div className={styles.items}>
        {sectionItems.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
