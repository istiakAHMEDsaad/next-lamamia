import BlogCard from '@/components/cards/BlogCard';

async function getData() {
  // const res = await fetch('https://picsum.photos/v2/list', {next: {revalidate: 600}});
  const res = await fetch('https://wallhaven.cc/api/v1/search', {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const { data } = await getData();
  // console.log(data);

  return (
    <div className='flex flex-col space-y-16'>
      {data.map((item) => (
        // <p key={item.id}>{item.id}</p>
        <BlogCard
          key={item.id}
          imgSrc={item.path}
          titleBlog={item.category}
          descBlog='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error accusantium voluptates reiciendis ipsam dolores dolor eligendi aut nihil saepe.'
          objectFit='object-contain'
          apiId={item.id}
        />
      ))}

      {/* <BlogCard
        imgSrc='https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg'
        titleBlog='This is it'
        descBlog='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error accusantium voluptates reiciendis ipsam dolores dolor eligendi aut nihil saepe.'
      />
      <BlogCard
        imgSrc='https://images.pexels.com/photos/29170205/pexels-photo-29170205.jpeg'
        titleBlog='This is it'
        descBlog='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error accusantium voluptates reiciendis ipsam dolores dolor eligendi aut nihil saepe.'
      /> */}
    </div>
  );
};

export default Blog;
