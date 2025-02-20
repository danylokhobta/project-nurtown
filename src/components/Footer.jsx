import logo from '../assets/icons/logoLight.svg';

import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import location from '../assets/icons/location.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import twitter from '../assets/icons/twitter.svg';
import pinterest from '../assets/icons/pinterest.svg';

function Footer() {
  return (
    <footer className='mt-[120px] w-full bg-gray text-white'>
      <div className='custom-container pt-[60px] pb-[60px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 sm:gap-[40px] md:grid-cols-3 lg:grid-cols-4'>

        <article className=' hidden lg:block'>
          <img src={logo} alt='logo' className='select-none'/>
        </article>
                
        <article>
          <p className='w-full text-[16px] font-bold'>Information</p>
          <ul className='list-none p-0 m-0'>
            <li className='mt-[16px] text-[14px] font-normal'><a className='custom-animation select-none hover:opacity-70' href='#'>Home</a></li>
            <li className='mt-[16px] text-[14px] font-normal'><a className='custom-animation select-none hover:opacity-70' href='#gallery'>Gallery</a></li>
            <li className='mt-[16px] text-[14px] font-normal'><a className='custom-animation select-none hover:opacity-70' href='#projects'>Projects</a></li>
            <li className='mt-[16px] text-[14px] font-normal'><a className='custom-animation select-none hover:opacity-70' href='#certification'>Certifications</a></li>
            <li className='mt-[16px] text-[14px] font-normal'><a className='custom-animation select-none hover:opacity-70' href='#contacts'>Contacts</a></li>
          </ul>
        </article>

        <article>
          <p className='w-full text-[16px] font-bold'>Contacts</p>
          <ul>
            <li className='mt-[16px] text-[14px] font-normal flex flex-nowrap items-center gap-[10px]'>
              <img src={location} alt='location' className='w-[15px] h-[15px] select-none' />
              <p className='font-normal'>
                1234 Sample Street <br />
                Austin Texas 78704
              </p>
            </li>
            <li className='mt-[16px] text-[14px] font-normal flex flex-nowrap items-center gap-[10px]'>
              <img src={phone} alt='phone' className='w-[15px] h-[15px] select-none'/>
              <p>
                512.333.2222
              </p>
            </li>
            <li className='mt-[16px] text-[14px] font-normal flex flex-nowrap items-center gap-[10px]'>
              <img src={mail} alt='mail' className='w-[15px] h-[15px] select-none'/>
              <p>
                sampleemail@gmail.com
              </p>
            </li>
          </ul>
        </article>
        
        <article className='flex flex-wrap content-start items-center gap-x-[40px] gap-y-[16px]'>
          <p className='w-full text-[16px] font-bold'>Social Media</p>
          <a target='_blank' className='custom-animation select-none hover:opacity-70' href='https://www.facebook.com/'><img src={facebook} alt='facebook' className='select-none'/></a>
          <a target='_blank' className='custom-animation select-none hover:opacity-70' href='https://twitter.com/'><img src={twitter} alt='twitter' className='select-none'/></a>
          <a target='_blank' className='custom-animation select-none hover:opacity-70' href='https://www.linkedin.com/'><img src={linkedin} alt='linkedin' className='select-none'/></a>
          <a target='_blank' className='custom-animation select-none hover:opacity-70' href='https://www.pinterest.com'><img src={pinterest} alt='pinterest' className='select-none'/></a>
        </article>
        
      </div>
      <p className='select-none w-full text-center py-[30px] border-t border-light-gray-3 opacity-50'>
        © 2019 All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
