'use client';

import LoaderSpinner from '@/components/loader/LoaderSpinner';
import { ThemeContext } from '@/context/ThemeContext';
import { X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import useSWR from 'swr';

const Dashboard = () => {
  // const { data: session, status } = useSession();
  const { mode } = useContext(ThemeContext);
  const session = useSession();
  console.log(session);

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  const handeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('image');
    const content = formData.get('content');

    const finalData = { title, description, image, content };

    console.log(finalData);
  };

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/dashboard/login');
    }
  }, [session.status, router]);

  if (session.status === 'loading') {
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <LoaderSpinner />
      </div>
    );
  }

  if (session.status === 'authenticated') {
    return (
      <div className='mb-10'>
        {isLoading ? (
          <div className='h-screen flex items-center justify-center'>
            <LoaderSpinner />
          </div>
        ) : (
          <div
            className={`flex lg:flex-row flex-col-reverse items-center justify-center gap-10`}
          >
            {/* left section */}
            <div className='flex-1 flex flex-col justify-center gap-3'>
              <div
                className={`border ${
                  mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                } rounded shadow relative p-3`}
              >
                <div className='flex flex-row max-sm:flex-col md:items-center gap-5'>
                  <div className='relative w-[320px] h-[180px] max-sm:w-[280px] max-sm:h-[157px]'>
                    <Image
                      src={
                        'https://images.unsplash.com/photo-1765873360351-9b8e1ac646de?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      }
                      fill
                      alt='image'
                      className='rounded object-cover'
                    />
                  </div>
                  <div className='max-sm:ml-2'>
                    <h2 className='text-3xl font-semibold'>Title</h2>
                    <p className='text-sm'>This is description</p>
                  </div>
                </div>
                <div className='absolute top-1 right-1 border border-red-300 rounded-full bg-red-700'>
                  <X color='white' size={18} />
                </div>
              </div>
            </div>

            {/* form section */}
            <div className='flex-1'>
              <form
                className={`${
                  mode === 'dark' ? 'bg-gray-200' : 'bg-gray-50'
                } text-gray-500 max-sm:w-[300px] mx-4 p-6 text-left text-sm rounded-lg border border-gray-300/60`}
                 onSubmit={handeSubmit}
              >
                <h1 className='text-4xl font-semibold mb-3'>Add new post</h1>

                {/* title */}
                <label className='font-medium' htmlFor='email'>
                  Title
                </label>
                <input
                  id='title'
                  className='w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3'
                  type='text'
                  name='title'
                  placeholder='Enter title'
                  required
                />

                {/* desc */}
                <label className='font-medium' htmlFor='email'>
                  Description
                </label>
                <input
                  id='description'
                  className='w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3'
                  type='text'
                  name='description'
                  placeholder='Enter description'
                  required
                />

                {/* image */}
                <label className='font-medium' htmlFor='email'>
                  Image
                </label>
                <input
                  id='image'
                  className='w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3'
                  type='text'
                  name='image'
                  placeholder='Enter image url'
                  required
                />

                <label className='font-medium' htmlFor='content'>
                  Content
                </label>
                <textarea
                  rows='3'
                  id='content'
                  className='w-full resize-none border mt-1.5 border-gray-500/30 outline-none rounded py-2.5 px-3'
                  type='text'
                  name='content'
                  placeholder='Enter content'
                  required
                ></textarea>

                <div className='flex items-center justify-between'>
                  <button
                    type='submit'
                    className='my-3 bg-[#4aaf7c] hover:bg-[#53c38a] cursor-pointer py-2 px-5 rounded text-white font-medium'
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;

/*const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 120 },
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);
  */
