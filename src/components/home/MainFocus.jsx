import Title from '../Title';

function MainFocus() {
  return (
    <div className="MainFocus container">
      <Title text='Main Focus/Mission Statement' isSubTitle={true} className='mb-[40px] xl:mb-[60px]'/>
      <div className='content grid grid-cols-1 gap-[40px]
        lg:grid-cols-[1fr_1fr] lg:gap-[100px] lg:px-[5px]
        xl:gap-[187px]
      '>
        <article className='flex max-w-[500px] xl:max-w-[auto] gap-[30px] xl:gap-[20px] 2xl:gap-[30px]'>
          <p className='font-semibold text-[160px] leading-[120px] text-light-gray-2 select-none md:text-[200px] md:leading-[140px]'>1</p>
          <p className='text-[16px] leading-[28px] font-medium text-gray md:text-[20px] md:leading-[32px] 2xl:text-[22px] 2xl:leading-[36px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
          </p>
        </article>
        <article className='flex max-w-[500px] xl:max-w-[auto] gap-[30px] xl:gap-[20px] 2xl:gap-[30px]'>
          <p className='font-semibold text-[160px] leading-[120px] text-light-gray-2 select-none md:text-[200px] md:leading-[140px]'>2</p>
          <p className='text-[16px] leading-[28px] font-medium text-gray md:text-[20px] md:leading-[32px] 2xl:text-[22px] 2xl:leading-[36px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor.
          </p>
        </article>
      </div>
    </div>
  );
}

export default MainFocus;
