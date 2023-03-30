import { ProductCard } from '@/components/ProductCard';
import { Text } from '@/components/Text';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import styles from './Related.module.scss';
import { useUpdate } from 'react-use';
import cn from 'classnames';

export const Related = () => {
  const previosRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const update = useUpdate();
  return (
    <div className={styles.related}>
      <Text className={styles.title} as="h4" text="O'xshash mahsulotlar" />

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          prevEl: previosRef.current,
          nextEl: nextRef.current,
        }}
        // onBeforeInit={update}
        onBeforeInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.prevEl = previosRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        // onSwiper={swiper => {
        //   // @ts-ignore
        //   swiper.params.navigation.prevEl = previosRef.current;
        //   //@ts-ignore
        //   swiper.params.navigation.nextEl = nextRef.current;
        // }}
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          576: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          992: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(item => (
          <SwiperSlide key={item}>
            <ProductCard item={{ name: 'Iphone' }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button ref={previosRef} className={cn(styles.btn, styles.previosBtn)}>
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
        </button>
        <button ref={nextRef} className={cn(styles.btn, styles.nextBtn)}>
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
