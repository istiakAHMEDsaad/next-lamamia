import BlogCard from '@/components/cards/BlogCard';

const Blog = () => {
  return (
    <div className='flex flex-col space-y-16'>
      <BlogCard
        imgSrc='https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg'
        titleBlog='This is it'
        descBlog='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error accusantium voluptates reiciendis ipsam dolores dolor eligendi aut nihil saepe.'
      />
      <BlogCard
        imgSrc='https://images.pexels.com/photos/29170205/pexels-photo-29170205.jpeg'
        titleBlog='This is it'
        descBlog='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error accusantium voluptates reiciendis ipsam dolores dolor eligendi aut nihil saepe.'
      />
    </div>
  );
};

export default Blog;
