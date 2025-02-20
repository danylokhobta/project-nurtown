import Title from '../components/Title';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';

function Contacts() {
  return (
    <div className="Contacts">
      <div className='custom-container flex gap-[60px] flex-wrap lg:gap-[170px] md:flex-nowrap'>
        <div className='content flex flex-col items-start gap-[45px] pt-[60px]'>
          <Title text="Contact Information" />
          <p>
            <p className='font-bold'>Company Name</p>
            1234 Sample Street Austin Texas 76401
          </p>
          <p className='font-bold'>512.333.2222</p>
          <p>
            sampleemail@gmail.com
          </p>
          <LinkButton type='dark' url='' text='contact us' />
        </div>
        <iframe className='w-full border-0 h-[400px] md:h-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124652.6969547394!2d-97.81434953739907!3d30.28162506162573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sde!4v1694766419423!5m2!1sen!2sde" title="Google Maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
