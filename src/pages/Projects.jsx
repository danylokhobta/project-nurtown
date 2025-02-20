import Title from '../components/Title';
import Callout from '../components/Callout';
import Footer from '../components/Footer';

const projects = [
  {
    "title": "Sample Project",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "url": "#projects",
    "img": "images/projects/sampleProject1.png"
  },
  {
    "title": "Sample Project 2",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "url": "#projects",
    "img": "images/projects/sampleProject2.png"
  },
  {
    "title": "Sample Project 3",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "url": "#projects",
    "img": "images/projects/sampleProject3.png"
  }
];

function Projects() {
  return (
    <div className="Projects">
      <div className='custom-container flex flex-col flex-nowrap gap-[60px]'>
        <Title text='Our Projects' />
        {projects.map((card, index) => (
          <Callout
            key={index}
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
