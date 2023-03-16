import React, { FC } from 'react';
import Link from 'next/link';

import { Text } from '@/components/Text';

import styles from './Section.module.scss';

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
          <Link href="/details/7118" key={item.id} className={styles.item}>
            <img className={styles.img} src={item.src} alt={item.name} />
            <Text as="p" className={styles.productName} align="left" text={item.name} />
            <Text as="p" align="left" text={"6 800 000 so'm"} />
          </Link>
        ))}
      </div>
    </div>
  );
};
