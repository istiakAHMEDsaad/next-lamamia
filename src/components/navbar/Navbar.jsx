// client side component
'use client';

import Link from 'next/link';
import Image from 'next/image';
import lamaIcon from '@/assets/lama_icon.webp';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ];

  return (
    <div className='h-24 flex justify-between items-center'>
      <Link href={'/'}>
        <Image
          src={lamaIcon}
          alt='image icon'
          className='h-10 w-10 inline-block'
        />
      </Link>

      <div className='flex items-center gap-5'>
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
        <button
          onClick={() => console.log('logout')}
          className='px-4.5 py-1.5 bg-white rounded text-black hover:bg-gray-200 cursor-pointer transition-colors'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
