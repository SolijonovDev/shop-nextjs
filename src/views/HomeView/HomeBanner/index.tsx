import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useUpdate } from 'react-use';

import { Container } from '@/components/Container';
import { BannerItem } from './BannerItem';
import { Button } from '@/components/Button';

import 'swiper/css';
import styles from './HomeBanner.module.scss';

const bannerData = [
  {
    id: 1,
    text: 'Cat img',
    imgUrl: '/images/cat.jpg',
  },
  {
    id: 4,
    text: 'Cats images',
    imgUrl: '/images/cats.jpg',
  },
  {
    id: 4,
    text: 'Cat two img',
    imgUrl: '/images/cats2.jpg',
  },
  {
    id: 4,
    text: 'Tiger img',
    imgUrl: '/images/tiger.jpg',
  },
  {
    id: 4,
    text: 'Tigers images',
    imgUrl: '/images/tigers.jpg',
  },
];

export const HomeBanner = () => {
  const update = useUpdate();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.homeBanner}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        loop={true}
        onBeforeInit={update}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView={1}
        onSwiper={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {bannerData.map(banner => (
          <SwiperSlide key={banner.id}>
            <BannerItem imgSrc={banner.imgUrl}>
              <p>{banner.text}</p>
            </BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <Container>
          <Button className={styles.btn} ref={navigationPrevRef}>
            Prev
          </Button>
          <Button className={styles.btn} ref={navigationNextRef}>
            Next
          </Button>
        </Container>
      </div>
    </div>
  );
};
