import { useState } from 'react';
import '../assets/css/navbar-elements-anim.css'
// import Menu from './menu'
import logoDark from '../assets/icons/logoDark.svg'


function Navbar() {

  const menu_items_list = [
    { label: 'home', url: '#' },
    { label: 'gallery', url: '#gallery' },
    { label: 'projects', url: '#projects' },
    { label: 'certification', url: '#certification' },
    { label: 'contacts', url: '#contacts' },
  ];

  // JavaScript to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`Navbar
                    fixed top-0 right-0 left-0 z-10
                    py-[30px] bg-white/50 backdrop-blur-[33px] select-none
                    md:py-[40px]
                    ${isOpen ? 'h-screen' : ''}`}>

      <div className="custom-container
                      flex justify-between items-center gap-[5px] flex-wrap
                      lg:gap-[15px] xl:gap-[55px]
                      md:flex-nowrap">
        
        <div className="Navbar-logo">
          <a href="#"><img src={logoDark} alt="Logo" /></a>
        </div>



        <div onClick={() => setIsOpen(!isOpen)} className='w-5 h-5 relative flex-col flex cursor-pointer md:hidden'>
          <span className={`bar w-full h-[1px] bg-gray my-[3px] custom-animation 
                          ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar w-full h-[1px] bg-gray my-[3px] custom-animation 
                          ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar w-full h-[1px] bg-gray my-[3px] custom-animation 
                          ${isOpen ? 'active' : ''}`}></span>
        </div>

        <ul id="NavbarMenu" className={`menu
          relative top-0 left-0
          h-0 w-full overflow-hidden flex-col justify-center
          list-none flex gap-0 custom-animation
          md:relative md:h-auto md:w-auto md:overflow-visible md:flex-row md:justify-start
          md:gap-2 lg:gap-4
          ${isOpen ? 'active' : ''}
        `}>
          {menu_items_list.map((item, i) => (
            <li key={i} className="w-full py-[20px] text-center
                          md:w-auto md:py-0 md:text-left"
                          onClick={() => setIsOpen(false)}>
              <a href={item.url} className="
                px-[15px] py-[4px]
                border-y border-transparent hover:border-t-primary hover:border-b-gray
                text-[24px] text-gray font-medium tracking-[4.8px] no-underline
                custom-animation
                md:text-[12px] md:tracking-[2.4px]
              ">
                {item.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
}

export default Navbar