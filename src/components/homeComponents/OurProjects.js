import './OurProjects.sass';
import LinkButton from '../LinkButton';
import Title from '../Title';

import img1 from '../../images/home/ourProjects1.png'
import img2 from '../../images/home/ourProjects2.png'
import img3 from '../../images/home/ourProjects3.png'
import img4 from '../../images/home/ourProjects4.png'
import img5 from '../../images/home/ourProjects5.png'

function OurProjects() {
  return (
    <div className="OurProjects container">
      <Title text='Our Projets' isSubTitle={true} />
      <div className='gallery'>
        <div className='card'>
          <img src={img1} alt='cardImg' className='cardImg' />
          <div className='content'>
            <h4>Sample <br /> Project</h4>
            <LinkButton type='transparent' showArrow={true} text='VIEW MORE' url='/projects' />
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt='cardImg' className='cardImg' />
          <div className='content'>
            <h4>Sample <br /> Project</h4>
            <LinkButton type='transparent' showArrow={true} text='VIEW MORE' url='/projects' />
          </div>
        </div>
        <div className='card'>
          <img src={img3} alt='cardImg' className='cardImg' />
          <div className='content'>
            <h4>Sample Project</h4> 
            <LinkButton type='transparent' showArrow={true} text='VIEW MORE' url='/projects' />
          </div>
        </div>
        <div className='card'>
          <img src={img4} alt='cardImg' className='cardImg' />
          <div className='content'>
            <h4>Sample Project</h4>
            <LinkButton type='transparent' showArrow={true} text='VIEW MORE' url='/projects' />
          </div>
        </div>
        <div className='card'>
          <img src={img5} alt='cardImg' className='cardImg' />
          <div className='content'>
            <h4>Sample Project</h4>
            <LinkButton type='transparent' showArrow={true} text='VIEW MORE' url='/projects' />
          </div>
        </div>
      </div>
      <div className='ourProjButton'>
        <LinkButton type='dark' showArrow={true} text='All Projects' url='/projects' />
      </div>
    </div>
  );
}

export default OurProjects;
