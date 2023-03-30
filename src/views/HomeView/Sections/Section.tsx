import React, { FC } from 'react';

import { Text } from '@/components/Text';

import { ProductCard } from '@/components/ProductCard';

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
      <Text className={styles.title} as="h3">
        <span>{title}</span>
        <span>
          <svg
            data-v-b5b5645a=""
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
              fill="black"
            ></path>
          </svg>
        </span>
      </Text>

      <div className={styles.items}>
        {sectionItems.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
