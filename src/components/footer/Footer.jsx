import Image from 'next/image';

const Footer = () => {
  const imageLocal = [
    { id: 1, src: '/1.png' },
    { id: 2, src: '/2.png' },
    { id: 3, src: '/3.png' },
    { id: 4, src: '/4.png' },
  ];

  return (
    <div className='h-12 flex flex-row items-center justify-between text-sm'>
      <div>&copy;2025 istiakAHMEDsaad. All rights reserved.</div>

      {/* image logo */}
      <div className='flex items-center gap-2.5'>
        {imageLocal.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            width={15}
            height={15}
            alt='logo'
            className='opacity-80 cursor-pointer hover:opacity-100 transition-opacity'
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
