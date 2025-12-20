import Image from 'next/image';
import Hero from '@/assets/hero.png';
import Button from '@/components/buttons/Button';

export default function Home() {
  return (
    <div className='container mx-auto mb-10'>
      <div className='flex max-sm:flex-col-reverse md:flex-row items-center justify-center'>
        {/* text */}
        <div className='flex-1'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-4xl font-bold md:text-7xl bg-linear-to-b from-emerald-900 to-gray-200 top-to-bottom-gradient'>
              Perfect design for your personal projects
              {/* webkit-background-clip webkit-text-fill-color */}
            </h1>
            <p className='max-sm:text-base text-2xl font-light font-weight-light'>
              Turning your Idea into Reality. We bring together the teams from
              the global tech industry.
            </p>
            <Button text='Find More' url='/portfolio' />
          </div>
        </div>

        {/* image container */}
        <div className='flex-1'>
          <div className='h-[500px] max-sm:w-72 relative'>
            <Image
              src={Hero}
              alt='hero image'
              fill={true}
              className='object-contain image-animation2'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
use fill method
<div className='relative w-96 h-96'>
        <Image
          src='https://images.unsplash.com/photo-1744024450738-b040cffc7ff9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='unsplash stock image'
          fill
          className='object-cover'
        />
      </div>

normal method
<Image
        src='https://images.pexels.com/photos/34341418/pexels-photo-34341418.jpeg'
        alt='pexels stock image'
        width={500}
        height={500}
        className='h-[400px] w-[400px] object-cover rounded mt-10'
      />
*/
