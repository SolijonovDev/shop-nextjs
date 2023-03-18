import React, { FC } from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

const news = [
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
  {
    id: 1,
    title: 'Wi-Fi tezroq ishlashi uchun nima qilish kerak: 5 ta oddiy qadam',
    subTitle:
      'Ushbu maslahatlar sizga uy yoki ofisingizdagi internet tezligini oshirishga yordam beradi.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/wifi.jpg',
  },
  {
    id: 2,
    title: '2023-yilda Apple bizga nimalarni tayyorlab qo‘ygan',
    subTitle: 'Yangi OS, smartfon, noutbuk va boshqalar',
    date: '18-03-2023',
    views: '1000',
    src: '/images/apple.jpg',
  },
  {
    id: 3,
    title: 'Uyali telefon qanday tanlanadi',
    subTitle: 'Ushbu maqolada biz qanday qilib yaxshi telefonni tanlash haqida gaplashamiz.',
    date: '18-03-2023',
    views: '1000',
    src: '/images/phone.jpg',
  },
  {
    id: 4,
    title: 'Qanday noutbook tanlash kerak?',
    subTitle: 'Qaysi xususiyatlariga etibor berish kerak',
    date: '18-03-2023',
    views: '1000',
    src: '/images/laptop.jpg',
  },
];

import styles from './NewsView.module.scss';

export const NewsView: FC = () => {
  return (
    <div className={styles.newsView}>
      <Container className={styles.container}>
        {news.map(({ id, title, subTitle, date, views, src }) => (
          <div key={id} className={styles.blog}>
            <img className={styles.img} src={src} alt={title} />
            <div className={styles.blogContent}>
              <Text as="h5" text={title} className={styles.blogTitle} />
              <div className={styles.date}>
                <Text as="span" text={date} />
                <Text className={styles.blogViews} as="span" text={`${views} views`} />
              </div>
              <Text as="p" text={subTitle} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
