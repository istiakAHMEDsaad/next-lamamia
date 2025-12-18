import PortfolioGalleryCard from '@/components/cards/PortfolioGalleryCard';
import { categoryItems } from './data';
import { notFound } from 'next/navigation';

const getData = (cate) => {
  const data = categoryItems[cate];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      {/* category showing */}
      <h1 className='text-[#53c38a] text-2xl font-semibold'>
        {params.category}
      </h1>

      {/* card container */}
      <div>
        {data.map((item, idx) => (
          <PortfolioGalleryCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            imgSrc={item.image}
            reverseClass={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

{
  /* <PortfolioGalleryCard
          reverseClass='flex-row'
          imgSrc='https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg'
        />
        <PortfolioGalleryCard
          reverseClass='flex-row-reverse'
          imgSrc='https://images.pexels.com/photos/3573603/pexels-photo-3573603.jpeg'
        /> */
}
