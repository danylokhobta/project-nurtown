import './LinkButton.sass';
import arrowDark from '../images/icons/arrow-dark.svg';
import arrowLight from '../images/icons/arrow-light.svg';

//GUIDE
//type = 'light', 'dark', 'transparent'
//showArrow = boolean
//url = string
//text = string

const LinkButton = ({ type, showArrow, url, text = '' }) => {
  return (
    <a className={`LinkButton ${type}`} href={url}>
      <p>{text.toUpperCase()}</p>
      {(showArrow) ? <img src={arrowDark} alt="arrow dark" className='arrow arrowDark' /> : ""}
      {(showArrow) ? <img src={arrowLight} alt="arrow light" className='arrow arrowLight' /> : ""}
    </a>
  );
}

export default LinkButton;

