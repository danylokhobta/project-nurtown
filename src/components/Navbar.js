import './Navbar.sass';
import logoDark from '../images/logoDark.svg';


function Navbar() {
  // JavaScript to toggle the mobile menu
  const toggleNavbar = () => {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("active");
  };

  return (
    <nav className='Navbar'>
      <div className='container'>
        <div className="Navbar-logo">
          <a href='#'><img src={logoDark} alt="Logo" /></a>
        </div>
        <div className="Navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="Navbar-menu" id="NavbarMenu">
          <li><a href="#">HOME</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certification">CERTIFICATION</a></li>
          <li><a href="#contacts">CONTACTS</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
