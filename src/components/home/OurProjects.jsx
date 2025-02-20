import LinkButton from '../LinkButton';
import Title from '../Title';

import img1 from '/images/home/ourProjects1.png'
import img2 from '/images/home/ourProjects2.png'
import img3 from '/images/home/ourProjects3.png'
import img4 from '/images/home/ourProjects4.png'
import img5 from '/images/home/ourProjects5.png'

function OurProjects() {
  return (
    <div className="OurProjects flex flex-wrap">
      <Title text='Our Projects' isSubTitle={true} />
      <div className='gallery flex flex-wrap gap-[30px] mt-[70px]'>
        <div className='card relative flex-grow cursor-pointer'>
          <img src={img1} alt='cardImg' className='cardImg w-full h-full z-[1]' />
          <div className='content absolute top-0 bottom-0 right-0 left-0 px-[10%] bg-card-bg text-white z-[2] flex flex-wrap content-center opacity-0 custom-animation hover:opacity-100'>
            <h4 className='w-full m-0 mb-[5px] text-[64px] font-bold leading-[110%]'>Sample <br /> Project</h4>
            <LinkButton url='#projects' type='transparent' showArrow={true} text='VIEW MORE' />
          </div>
        </div>
        <div className='card relative flex-grow cursor-pointer'>
          <img src={img2} alt='cardImg' className='cardImg w-full h-full z-[1]' />
          <div className='content absolute top-0 bottom-0 right-0 left-0 px-[10%] bg-card-bg text-white z-[2] flex flex-wrap content-center opacity-0 custom-animation hover:opacity-100'>
            <h4 className='w-full m-0 mb-[5px] text-[64px] font-bold leading-[110%]'>Sample <br /> Project</h4>
            <LinkButton url='#projects' type='transparent' showArrow={true} text='VIEW MORE' />
          </div>
        </div>
        <div className='card relative flex-grow cursor-pointer'>
          <img src={img3} alt='cardImg' className='cardImg w-full h-full z-[1]' />
          <div className='content absolute top-0 bottom-0 right-0 left-0 px-[10%] bg-card-bg text-white z-[2] flex flex-wrap content-center opacity-0 custom-animation hover:opacity-100'>
            <h4 className='w-full m-0 mb-[5px] text-[64px] font-bold leading-[110%]'>Sample Project</h4> 
            <LinkButton url='#projects' type='transparent' showArrow={true} text='VIEW MORE' />
          </div>
        </div>
        <div className='card relative flex-grow cursor-pointer'>
          <img src={img4} alt='cardImg' className='cardImg w-full h-full z-[1]' />
          <div className='content absolute top-0 bottom-0 right-0 left-0 px-[10%] bg-card-bg text-white z-[2] flex flex-wrap content-center opacity-0 custom-animation hover:opacity-100'>
            <h4 className='w-full m-0 mb-[5px] text-[64px] font-bold leading-[110%]'>Sample Project</h4>
            <LinkButton url='#projects' type='transparent' showArrow={true} text='VIEW MORE' />
          </div>
        </div>
        <div className='card relative flex-grow cursor-pointer'>
          <img src={img5} alt='cardImg' className='cardImg w-full h-full z-[1]' />
          <div className='content absolute top-0 bottom-0 right-0 left-0 px-[10%] bg-card-bg text-white z-[2] flex flex-wrap content-center opacity-0 custom-animation hover:opacity-100'>
            <h4 className='w-full m-0 mb-[5px] text-[64px] font-bold leading-[110%]'>Sample Project</h4>
            <LinkButton url='#projects' type='transparent' showArrow={true} text='VIEW MORE' />
          </div>
        </div>
      </div>
      <div className='mt-[30px] ml-auto'>
        <LinkButton url='#projects' type='dark' showArrow={true} text='All Projects' />
      </div>
    </div>
  );
}

export default OurProjects;
