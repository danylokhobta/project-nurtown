import './Contacts.sass';
import Title from '../components/Title';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';

function Contacts() {
  return (
    <div className="Contacts">
      <div className='container'>
        <div className='content '>
          <Title text="Contact Information" />
          <p>
            <strong>Company Name</strong><br />
            1234 Sample Street Austin Texas 76401
          </p>
          <p>
            <strong>512.333.2222</strong>
          </p>
          <p>
            sampleemail@gmail.com
          </p>
          <LinkButton type='dark' url='' text='contact us' />
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124652.6969547394!2d-97.81434953739907!3d30.28162506162573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sde!4v1694766419423!5m2!1sen!2sde" title="Google Maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
