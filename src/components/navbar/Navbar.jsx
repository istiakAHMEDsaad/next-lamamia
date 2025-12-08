import Link from 'next/link';
import Image from 'next/image';
import lamaIcon from '@/assets/llama_1929694.png';

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
    <div>
      <Link href={'/'}>
        <Image
          src={lamaIcon}
          alt='image icon'
          className='h-10 w-10 inline-block'
        />
      </Link>

      <div>
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
