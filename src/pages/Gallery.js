import './Gallery.sass';
import Title from '../components/Title';
import CarouselComponent from '../components/CarouselComponent';
import Footer from '../components/Footer';


import items from '../databases/galleryCarouselItems.json';

function Gallery() {
  return (
    <div className="Gallery">
      <div className='container'>
        <Title text='Photo Gallery' />
      </div>
      <CarouselComponent items={items}/> 
      <Footer />
    </div>
  );
}

export default Gallery;
