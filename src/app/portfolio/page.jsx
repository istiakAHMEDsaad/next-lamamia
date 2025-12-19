import Link from 'next/link';
import imageOne from '@/assets/illustration.png';
import imageTwo from '@/assets/websites.jpg';
import imageThree from '@/assets/apps.jpg';

export const metadata = {
  title: 'Lamamia Portfolio',
  description: 'This is lamamia portfolio'
}

const Portfolio = () => {
  const portFolioCategory = [
    {
      id: 5,
      url: '/portfolio/illustrations',
      title: 'Illustrations',
      style: {
        background: `url(${imageOne.src})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
      },
    },
    {
      id: 6,
      url: '/portfolio/websites',
      title: 'Websites',
      style: {
        background: `url(${imageTwo.src})`,
        backgroundSize: 'cover',
      },
    },
    {
      id: 7,
      url: '/portfolio/application',
      title: 'Application',
      style: {
        background: `url(${imageThree.src})`,
        backgroundSize: 'cover',
      },
    },
  ];

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Choose a gallery</h1>

      {/* medium */}
      <div className='flex items-center gap-5 max-sm:hidden mt-10'>
        {portFolioCategory.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            style={item.style}
            className='border-5 border-gray-300 rounded-sm w-[300px] h-[400px] relative hover:text-[#53c38a]'
          >
            <span className='absolute right-2.5 bottom-2.5 text-4xl font-bold'>
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* small */}
      <div className='md:hidden flex flex-col items-center justify-center gap-y-10 mt-10'>
        {portFolioCategory.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            style={item.style}
            className='w-72 h-72 border border-gray-200 relative rounded-sm'
          >
            <span className='absolute right-2.5 bottom-2.5 text-3xl font-semibold'>
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
