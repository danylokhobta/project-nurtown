import './Home.sass';
import CarouselComponent from '../components/CarouselComponent';
import About from '../components/homeComponents/About';
import MainFocus from '../components/homeComponents/MainFocus';
import OurProjects from '../components/homeComponents/OurProjects';
import ContactUs from '../components/homeComponents/ContactUs';
import Footer from '../components/Footer';

import database from '../databases/homeCarouselItems.json';

function Home() {
  return (
    <div className="Home">
      <CarouselComponent title="PROJECT Lorum" items={database} />
      <About />
      <MainFocus />
      <OurProjects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
