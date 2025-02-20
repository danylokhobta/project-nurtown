import Title from '../components/Title';
import CarouselComponent from '../components/CarouselComponent';
import Footer from '../components/Footer';


const items = [
  {
    "title": "Slide 1",
    "images": [
      { "imageSrc": "images/gallery/gallery1.png", "altText": "Image 1", "description": "Description 1" },
      { "imageSrc": "images/gallery/gallery2.png", "altText": "Image 2", "description": "Description 2" },
      { "imageSrc": "images/gallery/gallery3.png", "altText": "Image 3", "description": "Description 3" },
      { "imageSrc": "images/gallery/gallery4.png", "altText": "Image 4", "description": "Description 4" },
      { "imageSrc": "images/gallery/gallery5.png", "altText": "Image 5", "description": "Description 5" },
      { "imageSrc": "images/gallery/gallery6.png", "altText": "Image 6", "description": "Description 6" },
      { "imageSrc": "images/gallery/gallery7.png", "altText": "Image 7", "description": "Description 7" },
      { "imageSrc": "images/gallery/gallery8.png", "altText": "Image 8", "description": "Description 8" },
      { "imageSrc": "images/gallery/gallery9.png", "altText": "Image 9", "description": "Description 9" },
      { "imageSrc": "images/gallery/gallery10.png", "altText": "Image 10", "description": "Description 10" }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  },
  {
    "title": "Slide 2",
    "images": [
      { "imageSrc": "images/gallery/gallery1.png", "altText": "Image 1", "description": "Description 1" },
      { "imageSrc": "images/gallery/gallery2.png", "altText": "Image 2", "description": "Description 2" },
      { "imageSrc": "images/gallery/gallery3.png", "altText": "Image 3", "description": "Description 3" },
      { "imageSrc": "images/gallery/gallery4.png", "altText": "Image 4", "description": "Description 4" }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  },
  {
    "title": "Slide 3",
    "images": [
      { "imageSrc": "images/gallery/gallery1.png", "altText": "Image 1", "description": "Description 1" },
      { "imageSrc": "images/gallery/gallery2.png", "altText": "Image 2", "description": "Description 2" },
      { "imageSrc": "images/gallery/gallery3.png", "altText": "Image 3", "description": "Description 3" },
      { "imageSrc": "images/gallery/gallery4.png", "altText": "Image 4", "description": "Description 4" },
      { "imageSrc": "images/gallery/gallery5.png", "altText": "Image 5", "description": "Description 5" },
      { "imageSrc": "images/gallery/gallery6.png", "altText": "Image 6", "description": "Description 6" },
      { "imageSrc": "images/gallery/gallery7.png", "altText": "Image 7", "description": "Description 7" },
      { "imageSrc": "images/gallery/gallery8.png", "altText": "Image 8", "description": "Description 8" },
      { "imageSrc": "images/gallery/gallery9.png", "altText": "Image 9", "description": "Description 9" },
      { "imageSrc": "images/gallery/gallery10.png", "altText": "Image 10", "description": "Description 10" },
      { "imageSrc": "images/gallery/gallery1.png", "altText": "Image 1", "description": "Description 11" },
      { "imageSrc": "images/gallery/gallery2.png", "altText": "Image 2", "description": "Description 12" },
      { "imageSrc": "images/gallery/gallery3.png", "altText": "Image 3", "description": "Description 13" },
      { "imageSrc": "images/gallery/gallery4.png", "altText": "Image 4", "description": "Description 14" },
      { "imageSrc": "images/gallery/gallery5.png", "altText": "Image 5", "description": "Description 15" }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  }
];

function Gallery() {
  return (
    <div className="Gallery">
      <div className='custom-container'>
        <Title text='Photo Gallery' />
        <CarouselComponent items={items} carContClassName='order-1 my-10' navContClassName='order-2 flex gap-8 flex-wrap sm:flex-nowrap'/>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
