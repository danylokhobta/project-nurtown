import './Footer.sass';
import logo from '../images/logoLight.svg';

import facebook from '../images/icons/facebook.svg';
import linkedin from '../images/icons/linkedin.svg';
import location from '../images/icons/location.svg';
import mail from '../images/icons/mail.svg';
import phone from '../images/icons/phone.svg';
import twitter from '../images/icons/twitter.svg';
import pinterest from '../images/icons/pinterest.svg';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <article className='column-1'>
          <img src={logo} alt='logo' />
        </article>
        <article className='column-2'>
          <p>Information</p>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/gallery'>Gallery</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/certification'>Certifications</a></li>
            <li><a href='/contacts'>Contacts</a></li>
          </ul>
        </article>
        <article className='column-3'>
          <p>Contacts</p>
          <ul>
            <li>
              <img src={location} alt='location' />
              <p>
                1234 Sample Street <br />
                Austin Texas 78704
              </p>
            </li>
            <li>
              <img src={phone} alt='phone' />
              <p>
                512.333.2222
              </p>
            </li>
            <li>
              <img src={mail} alt='mail' />
              <p>
                sampleemail@gmail.com
              </p>
            </li>
          </ul>
        </article>
        <article className='column-4'>
          <p>Social Media</p>
          <a href='https://www.facebook.com/'><img src={facebook} alt='facebook' /></a>
          <a href='https://twitter.com/'><img src={twitter} alt='twitter' /></a>
          <a href='https://www.linkedin.com/'><img src={linkedin} alt='linkedin' /></a>
          <a href='https://www.pinterest.com'><img src={pinterest} alt='pinterest' /></a>
        </article>
      </div>
      <p className='copywrite'>
        © 2019 All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
