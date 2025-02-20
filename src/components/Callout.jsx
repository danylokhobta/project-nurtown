import Title from './Title';
import LinkButton from './LinkButton';

function Callout({title = 'untitled', text = 'empty', img, btnText, btnUrl}) {
  return (
    <div className="Callout bg-light-gray-5 grid grid-cols-1 xl:grid-cols-[55%_auto] p-[25px] md:py-[30px] md:px-[50px] lg:p-0">
      <div className='content gap-[20px] p-[30px] flex flex-col justify-between items-start lg:order-2 xl:gap-[30px]'>
        <Title text={title} isSubTitle={true} className='sm:text-[40px]'/>
        <p>{text}</p>
        <LinkButton
          text={btnText}
          url={btnUrl}
          type='light'
          showArrow={true}
        />
      </div>
      <div className='images gap-[15px] lg:gap-0 lg:order-1'>
        <img src={img} className='select-none w-full' alt='Callout Media' />
      </div>
    </div>
  );
}

export default Callout;
