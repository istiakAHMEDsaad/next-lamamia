import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cache } from 'react';

// async function getDataById(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`);

//   if (!res.ok) {
//     // throw new Error('Failed to fetch data');
//     return notFound();
//   }

//   return res.json();
// }

const getPost = cache(async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  return res.json();
});

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getPost(params.id);
  // console.log(data);

  return (
    <div className='space-y-16'>
      {/* top section */}
      <div className='flex max-sm:flex-col gap-5'>
        {/* left section */}
        <div className='flex-1'>
          <div className='flex flex-col items-start gap-10'>
            <h2 className='lg:text-5xl text-3xl'>{data.title}</h2>
            <p className='max-sm:text-sm font-weight-light'>{data.desc}</p>

            {/* avatar */}
            <div className='flex gap-3 items-center'>
              <div className='relative h-10 w-10'>
                <Image
                  src='https://cdn.dribbble.com/userupload/32569151/file/original-e3e72bb95aff23ae58dc2f933d1a5af9.png?resize=752x&vertical=center'
                  fill
                  alt='smily avatar'
                  className='object-cover rounded-full'
                />
              </div>

              <p>{data.username}</p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className='flex-1'>
          <div className='relative h-[350px] w-full'>
            <Image
              src={data.image}
              fill
              alt='smily avatar'
              className='object-cover rounded'
            />
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className='flex flex-col gap-5 font-weight-light'>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

// const res = await fetch(`https://wallhaven.cc/api/v1/w/${id}`);
{
  /* <Image
              src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              alt='smily avatar'
              className='object-cover rounded'
            /> */
}
