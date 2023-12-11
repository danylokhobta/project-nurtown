import './Projects.sass';
import Title from '../components/Title';
import Callout from '../components/Callout';
import Footer from '../components/Footer';

import projects from '../databases/projects.json';

function Projects() {
  return (
    <div className="Projects">
      <div className='content container'>
        <Title text='Our Projects' />
        {projects.map((card) => (
          <Callout
            title={card.title}
            text={card.text}
            img={card.img}
            btnText='View More'
            btnUrl={card.url}
          />
        ))}
        
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
