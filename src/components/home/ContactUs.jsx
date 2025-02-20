import img from '/images/home/contactUs.png'
import Title from '../Title';
import LinkButton from '../LinkButton';

function ContactUs() {
  return (
    <div className="ContactUs custom-container">
      <Title text='Contact Us' isSubTitle={true} />
      <form action="/action_page.php" className='flex mt-[30px] flex-wrap gap-[30px] lg:gap-[70px]'>
        <div className='flex flex-wrap gap-[30px] w-full md:flex-nowrap'>
          <div className='md:order-2'>
            <img src={img} alt='Contact Us Img' className=''/>
          </div>
          <div className='min-w-[300px] w-full flex flex-col gap-[10px] md:w-auto md:order-1'>
            <input type="text" id="fname" name="firstname" placeholder="Name" className='w-full outline-none bg-light-gray-6 border-0 py-[15px] px-[20px] focus-visible:bg-light-gray-4'/>
            <input type="text" id="lname" name="lastname" placeholder="Phone Number" required className='w-full outline-none bg-light-gray-6 border-0 py-[15px] px-[20px] focus-visible:bg-light-gray-4'/>
            <input type="text" id="email" name="email" placeholder="Email" required className='w-full outline-none bg-light-gray-6 border-0 py-[15px] px-[20px] focus-visible:bg-light-gray-4'/>
            <input type="text" id="subject" name="subject" placeholder="Subject" className='w-full outline-none bg-light-gray-6 border-0 py-[15px] px-[20px] focus-visible:bg-light-gray-4'/>
            <textarea type="text" id="message" name="message" placeholder="Message" required className='w-full outline-none bg-light-gray-6 border-0 py-[15px] px-[20px] focus-visible:bg-light-gray-4 h-full resize-none'></textarea>
          </div>
        </div>
        <button className='p-0 no-underline border-0 outline-inherit' type='submit'>
          <LinkButton type='dark' showArrow={true} text='Send Email' />
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
