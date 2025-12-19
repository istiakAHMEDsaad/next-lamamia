import Image from 'next/image';
import contactImage from '@/assets/contact.png';

export const metadata = {
  title: 'Lamamia Contact',
  description: 'This is lamamia contact section',
};

const Contact = () => {
  return (
    <div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-16'>
        Let&apos;s Keep in Touch
      </h1>

      {/* content */}
      <div className='flex md:flex-row flex-col items-center justify-center'>
        {/* image */}
        <div className='flex-1'>
          <div className='relative max-sm:h-72 max-sm:w-72 md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] image-animation1'>
            <Image
              src={contactImage}
              fill
              alt='contact image'
              className='object-cover'
              placeholder='blur'
            />
          </div>
        </div>

        {/* form */}
        <div className='flex-1 max-sm:mt-10'>
          <form className='flex flex-col gap-5'>
            <input
              className='p-5 bg-transparent border border-gray-300 rounded-md text-lg outline-none'
              type='text'
              placeholder='Name'
            />
            <input
              className='p-5 bg-transparent border border-gray-300 rounded-md text-lg outline-none'
              type='email'
              placeholder='Email'
            />
            <textarea
              className='p-5 bg-transparent border border-gray-300 rounded-md text-lg outline-none'
              cols={30}
              rows={10}
              placeholder='Message'
            ></textarea>
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
