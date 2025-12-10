import PortfolioGalleryCard from '@/components/cards/PortfolioGalleryCard';

const Category = ({ params }) => {
  return (
    <div>
      {/* category showing */}
      <h1 className='text-[#53c38a] text-2xl font-semibold'>
        {params.category}
      </h1>

      {/* card container */}
      <div>
        <PortfolioGalleryCard
          reverseClass='flex-row'
          imgSrc='https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg'
        />
        <PortfolioGalleryCard
          reverseClass='flex-row-reverse'
          imgSrc='https://images.pexels.com/photos/3573603/pexels-photo-3573603.jpeg'
        />
      </div>
    </div>
  );
};

export default Category;
