import React from 'react';

import { Container } from '@/components/Container';

import styles from './Features.module.scss';

const items = [
  {
    id: 1,
    text: 'Самый большой выбор техники',
    src: '/images/list.svg',
  },
  {
    id: 2,
    text: 'Быстрое оформление заказа',
    src: '/images/clock.svg',
  },
  {
    id: 3,
    text: 'Можно забрать заказ в пункте выдачи',
    src: '/images/location.svg',
  },
  {
    id: 4,
    text: 'Доставка в любую точку Москвы',
    src: '/images/delivery.svg',
  },
  {
    id: 5,
    text: 'Оплата картой и наличными',
    src: '/images/payment.svg',
  },
];

export const FeaturesPanel = () => {
  return (
    <div className={styles.featuresPanel}>
      <Container className={styles.container}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <img className={styles.img} src={item.src} alt="logo" />
            <p key={item.id}>{item.text}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};
