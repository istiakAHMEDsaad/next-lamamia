// client side component
'use client';

import Link from 'next/link';
import Image from 'next/image';
import lamaIcon from '@/assets/nav-lama.webp';
import { TiThMenu, TiThMenuOutline } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className='container mx-auto'>
      <div className='h-24 flex justify-between items-center'>
        <Link href={'/'}>
          <Image
            src={lamaIcon}
            alt='image icon'
            className='h-10 w-10 inline-block'
          />
        </Link>

        {/* medium */}
        <div className='flex items-center gap-5 max-sm:hidden'>
          {links.map((item) => (
            <Link key={item.id} href={item.url}>
              {item.title}
            </Link>
          ))}
          <button
            onClick={() => console.log('logout')}
            className='px-4.5 py-1.5 bg-[#4aaf7c] rounded text-white hover:bg-[#53c38a] cursor-pointer transition-colors'
          >
            Logout
          </button>
        </div>

        {/* mobile */}
        <div className='relative sm:hidden'>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <TiThMenuOutline size={30} /> : <TiThMenu size={30} />}
          </button>

          <div
            className={`absolute right-0 top-12 z-50 w-48 rounded-xl
            bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg
            transition-all duration-300
            ${
              isOpen
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
            }
          `}
          >
            {/* menu items */}
            <div className='flex flex-col p-4 gap-3 text-white'>
              {links.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className='hover:bg-white/20 rounded-md px-2 py-1 transition'
                >
                  {item.title}
                </Link>
              ))}

              <button
                className='mt-2 bg-white/80 text-black rounded-md py-1 hover:bg-white transition'
                onClick={() => console.log('logout')}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
