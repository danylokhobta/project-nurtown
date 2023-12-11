import './About.sass';
import Title from '../Title';
import LinkButton from '../LinkButton';

import about1 from '../../images/home/about-1.png';
import about2 from '../../images/home/about-2.png';
import about3 from '../../images/home/about-3.png';

function About() {
  return (
    <div className="About container">
      <div className='images'>
        <img src={about1} alt='about-1' />
        <img src={about2} alt='about-2' />
        <img src={about3} alt='about-3' />
      </div>
      <div className='text'>
        <Title text='About' isSubTitle={true}/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <LinkButton type='light' showArrow={true} text='READ MORE' url='/projects' />
      </div>
    </div>
  );
}

export default About;
