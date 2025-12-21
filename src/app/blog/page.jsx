import BlogCard from '@/components/cards/BlogCard';

export const metadata = {
  title: 'Lamamia Blog',
  description: 'This is lamamia blog section',
};

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    // next: { revalidate: 120 },
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className='flex flex-col space-y-16'>
      {data?.map((item) => (
        // <p key={item.id}>{item.id}</p>
        <BlogCard
          key={item._id}
          imgSrc={item.image}
          titleBlog={item.title}
          descBlog={item.desc}
          objectFit='object-contain'
          apiId={item._id}
        />
      ))}
    </div>
  );
};

export default Blog;
