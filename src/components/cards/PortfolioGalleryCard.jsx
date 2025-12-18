import Image from 'next/image';
import Button from '../buttons/Button';

const PortfolioGalleryCard = ({ reverseClass, title, desc, imgSrc }) => {
  const isEven = reverseClass % 2 === 0;
  return (
    <div
      className={`flex ${
        isEven ? 'flex-row-reverse' : 'flex-row'
      } max-sm:flex-col-reverse gap-12 mt-12 mb-24 items-center`}
    >
      {/* left text section */}
      <div className='flex-1'>
        <div className='flex flex-col gap-5'>
          <h1 className='max-sm:text-4xl text-5xl font-semibold'>{title}</h1>
          <p>{desc}</p>
          <Button text='See More' url='#' />
        </div>
      </div>

      {/* right image section */}
      <div className='flex-1'>
        <div className='relative lg:w-[500px] lg:h-[500px] md:h-[300px] md:w-[300px] h-72 w-72'>
          <Image
            src={imgSrc}
            alt='image'
            fill={true}
            className='object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGalleryCard;
