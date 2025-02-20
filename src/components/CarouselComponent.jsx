import React, { useState } from 'react';
import Title from './Title';
import LinkButton from './LinkButton';
import arrowToRight from '../assets/icons/arrow-dark.svg';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

const CarouselComponent = ({ title, items, carContClassName, navContClassName, className, custPagiClassName, custNaviClassName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to format the current index to two digits
  const formatIndex = (index) => (index < 10 ? `0${index}` : index);

  return (
    <div className={`${className} CarouselComponent custom-container select-none flex flex-wrap gap-5`}>
      <div className={`${navContClassName} navigation-container`}>
        <Title text={title} />
        <div className={`${custPagiClassName} custom-pagination text-2xl text-light-gray-3 font-normal flex items-center`}>
          <span className="current-slide">{formatIndex(currentSlide + 1)}</span>
          <span className="bg-light-gray-4 mx-8 w-11 h-0.5 -rotate-45"></span>
          {formatIndex(items.length)}
        </div>
        <div className={`${custNaviClassName} custom-navigation w-full flex items-center gap-3`}>
          <button className="swiper-button-prev bg-white border border-light-gray-2 cursor-pointer outline-inherit p-3.5 hover:bg-light-gray-1">
            <img src={arrowToRight} alt="arrow to left" className='w-6 h-6 -mb-1 rotate-180' />
          </button>
          <button className="swiper-button-next bg-white border border-light-gray-2 cursor-pointer outline-inherit p-3.5 hover:bg-light-gray-1">
            <img src={arrowToRight} alt="arrow to right" className='w-6 h-6 -mb-1' />
          </button>
        </div>
      </div>

      <div className={`${carContClassName} carousel-container min-w-0 max-w-full`}>
        <Swiper
          rewind={true}
          autoHeight={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {items.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex} className="carousel-item">
              <div className="photo-grid w-full grid content-around grid-cols-[repeat(auto-fit,_minmax(50%,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-2 md:gap-4 lg:gap-8">
                {slide.images.map((image, index) => {
                  return (
                    <div key={index} className="w-full">
                      <img src={image.imageSrc} alt={image.altText} className='w-full h-full' />
                    </div>
                  )
                })}
              </div>
              <LinkButton type="light" showArrow={true} text={slide.button.title.toUpperCase()} url={slide.button.url} className='absolute bottom-0 left-0 hidden' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;
