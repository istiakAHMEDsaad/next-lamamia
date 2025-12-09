import Image from 'next/image';
import Hero from '@/assets/hero.png';

export default function Home() {
  return (
    <div>
      {/* text */}
      <div>
        <h1>Perfect design for your personal projects</h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className='px-5.5 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer'>
          Find More
        </button>
      </div>

      {/* image container */}
      <div>
        <Image src={Hero} alt='hero image' />
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
