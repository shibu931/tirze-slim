'use client'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const HomeCarousel = () => {
  const sliderImage = [
    "banner-1.webp",
    "banner-2.webp",
  ]
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={false}
      pagination={{ clickable: true }}
    >
      {
        sliderImage.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/${item}`}
              height="500"
              width="1200"
              alt="Kraftzonal"
              className="w-full h-[450px] md:h-[600px] object-cover object-bottom sm:h-auto"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};