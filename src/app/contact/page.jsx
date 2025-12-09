import Image from 'next/image';
import contactImage from '@/assets/contact.png';

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
          <Image
            src={contactImage}
            width={384}
            height={384}
            alt='contact image'
            className='max-sm:w-96 max-sm:h-96 md:w-[400px] lg:w-[500px] lg:h-[500px] object-cover image-animation1'
            placeholder='blur'
          />
        </div>
        {/* form */}
        <form className='flex-1 flex flex-col gap-5'>
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
  );
};

export default Contact;
