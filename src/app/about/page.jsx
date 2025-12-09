import Button from '@/components/buttons/Button';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      {/* image container */}
      <div className='w-full h-[300px] relative mb-12'>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='hero image'
          fill={true}
          className='object-cover grayscale'
        />
        {/* image inline text */}
        <div className='absolute bottom-5 left-5 bg-linear-to-r from-[#4aaf7c] to-[#53c38a]/50 p-1.5 rounded-sm'>
          <h1 className='font-bold text-4xl'>Digital Storytellers</h1>
          <h2 className='text-2xl font-bold max-sm:hidden'>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      {/* text container */}
      <div className='flex max-sm:flex-col gap-24'>
        {/* left section */}
        <div className='flex-1 flex flex-col gap-7'>
          <h1 className='md:text-4xl font-bold text-3xl'>Who Are We?</h1>
          <p className='text-[18px] text-justify font-weight-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        {/* right section */}
        <div className='flex-1 flex flex-col gap-7'>
          <h1 className='md:text-4xl font-bold text-3xl'>What We Do?</h1>
          <p className='text-[18px] text-justify font-weight-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text='Contact' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
