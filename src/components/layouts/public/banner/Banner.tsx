'use client';

import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import Image from 'next/image';

/* ---------------- MAIN BANNER ---------------- */

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: '/images/banner 1.png',
      alt: 'Jewellery Collection Banner',
    },
    {
      id: 2,
      image: '/images/banner-2.png',
      alt: 'Premium Jewellery Collection',
    },
    {
      id: 3,
      image: '/images/banner-3.png',
      alt: 'Luxury Gold Jewellery',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFCF5] to-white">
      <div className="container mx-auto ">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop
          speed={800}
          className="jewellery-banner h-[200px] overflow-hidden sm:h-[320px] md:h-[400px] lg:h-[700px] "
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gold Pagination Styling */}
      <style jsx global>{`
        .jewellery-banner .swiper-pagination {
          bottom: 14px !important;
        }

        .jewellery-banner .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
          background: #d4af37;
          opacity: 0.65;
          transition: all 0.3s ease;
        }

        .jewellery-banner .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          background: #b8860b;
          opacity: 1;
        }

        @media (max-width: 640px) {
          .jewellery-banner .swiper-pagination {
            bottom: 8px !important;
          }

          .jewellery-banner .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }

          .jewellery-banner .swiper-pagination-bullet-active {
            width: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
