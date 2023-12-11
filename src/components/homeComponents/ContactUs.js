import './ContactUs.sass';
import img from '../../images/home/contactUs.png'
import Title from '../Title';
import LinkButton from '../LinkButton';

function ContactUs() {
  return (
    <div className="ContactUs container">
      <Title text='Contact Us' isSubTitle={true} />
      <form action="/action_page.php">
        <div className='content'>
          <div className='inputs'>
            <input type="text" id="fname" name="firstname" placeholder="Name" />
            <input type="text" id="lname" name="lastname" placeholder="Phone Number" required/>
            <input type="text" id="email" name="email" placeholder="Email" required/>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
            <textarea type="text" id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <img src={img} alt='Contact Us Img' />
        </div>
        <button className='submitButton' type='submit'>
          <LinkButton type='dark' showArrow={true} text='Send Email' />
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
