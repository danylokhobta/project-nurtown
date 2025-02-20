import arrowDark from '../assets/icons/arrow-dark.svg';
import arrowLight from '../assets/icons/arrow-light.svg';

//GUIDE
//type = 'light', 'dark', 'transparent'
//showArrow = boolean
//url = string
//text = string

const LinkButton = ({ type, showArrow, url, text = '', className }) => {
  return (
    <a href={url} className={`LinkButton ${className}
      select-none no-underline cursor-pointer gap-4 items-center flex
      ${type === 'light' && 'bg-white text-gray hover:bg-light-gray-1 px-[22px] md:px-[27px] xl:px-[35px] py-[16px] md:py-[18px] xl:py-[23.5px]'}
      ${type === 'dark' && 'bg-gray text-white hover:bg-[#383838] px-[22px] md:px-[27px] xl:px-[35px] py-[16px] md:py-[18px] xl:py-[23.5px]'}
      ${type === 'transparent' && 'text-white'}
    `}>

      <p className='text-[12px] tracking-[2.4px] whitespace-nowrap'>
        {text.toUpperCase()}
      </p>

      {showArrow &&
        <img src={arrowDark} alt="arrow dark" className={`w-[24px] h-[24px]
        ${type === 'dark' || 'transparent' && 'hidden'}`} />
      }

      {showArrow &&
        <img src={arrowLight} alt="arrow light" className={`w-[24px] h-[24px]
        ${type === 'light' && 'hidden'}`} />
      }
    </a>
  );
}

export default LinkButton;

