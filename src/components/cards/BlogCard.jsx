import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ imgSrc, titleBlog, descBlog, objectFit, apiId }) => {
  return (
    <>
      <Link href={`/blog/${apiId}`}>
        <div className='flex flex-col lg:flex-row justify-between max-sm:items-center max-sm:gap-4'>
          {/* left image */}
          <div className='lg:basis-[40%] max-md:flex-1'>
            <div className='relative w-72 h-[162px] md:w-[500px] md:h-[281.25px]'>
              <Image
                src={imgSrc}
                fill
                alt='image'
                className={`${objectFit} rounded`}
              />
            </div>
          </div>

          {/* right text */}
          <div className='lg:basis-[55%] max-md:flex-1'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl font-semibold'>{titleBlog}</h1>

              <p>{descBlog.slice(0, 15)}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
