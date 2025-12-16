import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getDataById(id) {
  const res = await fetch(`https://wallhaven.cc/api/v1/w/${id}`);

  if (!res.ok) {
    // throw new Error('Failed to fetch data');
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { data } = await getDataById(params.id);
  console.log(data);

  return (
    <div className='space-y-16'>
      {/* top section */}
      <div className='flex max-sm:flex-col gap-5'>
        {/* left section */}
        <div className='flex-1'>
          <div className='flex flex-col items-start gap-10'>
            <h2 className='lg:text-5xl text-3xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className='max-sm:text-sm font-weight-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quisquam vitae at officia sed qui obcaecati, fugit enim
              voluptatibus impedit, blanditiis, laudantium voluptatem placeat
              fuga! Ratione fugiat voluptates in id! Consequatur assumenda
              placeat sunt. Hic doloribus dolorum eligendi repellendus, saepe
              placeat repellat error esse, porro animi eveniet nihil dolores
              laborum.
            </p>

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

              <p>John Doe</p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className='flex-1'>
          <div className='relative h-[350px] w-full'>
            <Image
              src={data.path}
              fill
              alt='smily avatar'
              className='object-cover rounded'
            />
            {/* <Image
              src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              alt='smily avatar'
              className='object-cover rounded'
            /> */}
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className='flex flex-col gap-5 font-weight-light'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          architecto non alias ab maiores quae placeat et, quis recusandae quod
          dolore minus nam dolores qui magni eius commodi neque fugit porro
          officia, esse enim. Eaque sunt quasi aspernatur, ipsum hic dolorem
          error labore porro mollitia id deserunt. Eius eveniet quaerat
          voluptatum quidem est, similique ducimus nulla aperiam, perferendis
          illo dolore aut, excepturi corporis! Iste eum ad nam ipsa? Itaque quo
          tenetur saepe ab sunt fugiat asperiores dolorum pariatur aperiam
          eligendi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          architecto non alias ab maiores quae placeat et, quis recusandae quod
          dolore minus nam dolores qui magni eius commodi neque fugit porro
          officia, esse enim. Eaque sunt quasi aspernatur, ipsum hic dolorem
          error labore porro mollitia id deserunt. Eius eveniet quaerat
          voluptatum quidem est, similique ducimus nulla aperiam, perferendis
          illo dolore aut, excepturi corporis! Iste eum ad nam ipsa? Itaque quo
          tenetur saepe ab sunt fugiat asperiores dolorum pariatur aperiam
          eligendi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          architecto non alias ab maiores quae placeat et, quis recusandae quod
          dolore minus nam dolores qui magni eius commodi neque fugit porro
          officia, esse enim. Eaque sunt quasi aspernatur, ipsum hic dolorem
          error labore porro mollitia id deserunt. Eius eveniet quaerat
          voluptatum quidem est, similique ducimus nulla aperiam, perferendis
          illo dolore aut, excepturi corporis! Iste eum ad nam ipsa? Itaque quo
          tenetur saepe ab sunt fugiat asperiores dolorum pariatur aperiam
          eligendi.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
