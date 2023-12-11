import React, { useRef, useState, useEffect } from 'react';

import './CarouselComponent.sass';
import Title from './Title';
import LinkButton from './LinkButton';
import arrowToRight from '../images/icons/arrow-dark.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import {Pagination, Autoplay, Navigation } from 'swiper/modules';

const CarouselComponent = ({title, items}) => {

  // custom pagination
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.init();
      swiperRef.current.swiper.on('slideChange', () => {
        setCurrentSlide(swiperRef.current.swiper.realIndex); // Update the current slide index
      });
    }
  }, []);

  // Function to format the current index to always display two digits
  const formatIndex = (index) => {
    return index < 10 ? `0${index}` : index;
  };

  // images-grid for the slides
  const createPhotoGrid = (images) => {
    let columns = '';
    if(images.length < 5){
      columns = `repeat(${images.length}, 1fr)`;
    }
    return (
      <div className="photo-grid" style={{ gridTemplateColumns: columns }}>
        {images.map((image, index) => (
          <div key={index} className="photo">
            <img src={require(`../images/${image.imageSrc}`)} alt={image.altText} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="CarouselComponent container">

      <div className='content'>
        <Title text={title} />
        <div className="custom-pagination">
          <span className="current-slide">{formatIndex(currentSlide + 1)}</span>
          <span className='slash'></span>
          {formatIndex(items.length)}
        </div>
        <div className="custom-navigation">
          <button className="swiper-button-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><img src={arrowToRight} alt="arrow to left" /></button>
          <button className="swiper-button-next" onClick={() => swiperRef.current.swiper.slideNext()}><img src={arrowToRight} alt="arrow to right"/></button>
        </div>
      </div>

      <div className="carousel-container">
        <Swiper
          ref={swiperRef}
          rewind={true}
          autoHeight={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {items.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex} className="carousel-item">
              {createPhotoGrid(slide.images, slideIndex === 0)}
              <LinkButton
                type='light'
                showArrow={true}
                text={slide.button.title.toUpperCase()}
                url={slide.button.url}
              />
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
      
    </div>
  );
};

export default CarouselComponent;