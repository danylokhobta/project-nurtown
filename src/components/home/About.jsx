import Title from '../Title';
import LinkButton from '../LinkButton';

import about1 from '/images/home/about-1.png';
import about2 from '/images/home/about-2.png';
import about3 from '/images/home/about-3.png';

function About() {
  return (
    <div className="About container
      p-[25px] bg-light-gray-5
      grid gap-[30px] grid-cols-1
      sm:py-[30px] sm:px-[50px]
      md:grid-cols-[minmax(40%,_auto)_minmax(40%,_auto)]
      lg:py-[30px] lg:px-[100px]
    ">
      <div className='text flex flex-wrap content-start gap-[30px] md:order-2'>
        <Title text='About' isSubTitle={true}/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <LinkButton type='light' showArrow={true} text='READ MORE' url='/projects' />
      </div>
      <div className='images columns-2 gap-[15px] sm:gap-[30px] md:order-1'>
        <img src={about1} alt='about-1' className='select-none w-full mb-[15px] sm:mb-[30px]'/>
        <img src={about2} alt='about-2' className='select-none w-full'/>
        <img src={about3} alt='about-3' className='select-none w-full'/>
      </div>
    </div>
  );
}

export default About;
