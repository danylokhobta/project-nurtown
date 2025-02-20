import CarouselComponent from '../components/CarouselComponent';
import About from '../components/home/About';
import MainFocus from '../components/home/MainFocus';
import OurProjects from '../components/home/OurProjects';
import ContactUs from '../components/home/ContactUs';
import Footer from '../components/Footer';

const database = [
  {
    "title": "Slide 1",
    "images": [
      {
        "imageSrc": "images/home/header.png",
        "altText": "Item 1"
      }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  },
  {
    "title": "Slide 2",
    "images": [
      {
        "imageSrc": "images/home/header.png",
        "altText": "Item 2"
      }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  },
  {
    "title": "Slide 3",
    "images": [
      {
        "imageSrc": "images/home/header.png",
        "altText": "Item 3"
      }
    ],
    "button": {
      "title": "view projects",
      "url": "/projects"
    }
  }
]


function Home() {
  return (
    <div className="Home">
      <div className='custom-container flex flex-col gap-[120px]'>
        <CarouselComponent title="PROJECT Lorum" items={database} className='justify-between flex-wrap md:flex-nowrap' custPagiClassName='hidden md:flex' custNaviClassName='hidden md:flex' navContClassName='w-72 self-end flex flex-wrap pb-6 md:gap-14 md:pr-14 md:pb-11 lg:pr-32 lg:pb-24 gap-24' carContClassName='min-w-0 max-w-[770px]'/>
        <About />
        <MainFocus />
        <OurProjects />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
