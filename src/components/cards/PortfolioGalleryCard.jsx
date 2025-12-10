import Image from 'next/image';
import Button from '../buttons/Button';

const PortfolioGalleryCard = ({ reverseClass, imgSrc }) => {
  return (
    <div
      className={`flex md:${reverseClass} max-sm:flex-col-reverse gap-12 mt-12 mb-24 items-center`}
    >
      {/* left text section */}
      <div className='flex-1'>
        <div className='flex flex-col gap-5'>
          <h1 className='max-sm:text-4xl text-5xl font-semibold'>
            Creative Portfolio
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusantium placeat molestiae tenetur voluptatem? Totam explicabo
            necessitatibus magnam architecto alias!
          </p>
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
