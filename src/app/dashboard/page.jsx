'use client';

import LoaderSpinner from '@/components/loader/LoaderSpinner';
import { ThemeContext } from '@/context/ThemeContext';
import { X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const Dashboard = () => {
  // const { data: session, status } = useSession();
  const { mode } = useContext(ThemeContext);
  const session = useSession();

  const router = useRouter();

  const username = session?.data?.user?.name;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    username ? `/api/posts?username=${username}` : null,
    fetcher
  );

  // post the data
  const handeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('image');
    const content = formData.get('content');

    const finalData = {
      title,
      desc: description,
      image,
      content,
      username,
    };

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create post');
      }

      toast.success('Post created successfully');

      e.target?.reset();

      mutate();
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong!');
    }
  };

  // delete function
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to delete the post');
      }

      toast.success(data.message || 'Post deleted!');
      mutate();
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    }
  };

  // modal confirm
  const confirmDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div className='flex flex-col gap-4 p-1'>
          <div className='flex items-start gap-4'>
            {/* Icon with soft pulse/bg effect */}
            <div className='shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-50 border border-red-100'>
              <svg
                className='w-5 h-5 text-red-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
            </div>

            <div>
              <h3 className='text-sm font-semibold text-slate-900'>
                Confirm Deletion
              </h3>
              <p className='mt-1 text-xs leading-relaxed text-slate-500'>
                This action cannot be undone. This post will be permanently
                removed from our servers.
              </p>
            </div>
          </div>

          {/* Action Buttons with high-quality borders/shadows */}
          <div className='flex justify-end gap-2 mt-2'>
            <button
              onClick={closeToast}
              className='px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95'
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDelete(id);
                closeToast();
              }}
              className='px-3 py-1.5 text-xs font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 transition-all active:scale-95'
            >
              Delete Post
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-right',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        // We remove the default padding/styling of the toast container here
        className:
          'border border-slate-200 shadow-2xl rounded-xl !bg-white !p-4',
      }
    );
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
        <div
          className={`flex lg:flex-row flex-col-reverse items-center justify-center gap-10`}
        >
          {/* left section */}
          {isLoading ? (
            <div className='flex-1 flex items-center justify-center'>
              <LoaderSpinner />
            </div>
          ) : (
            <div className='flex-1 flex flex-col justify-center gap-5'>
              {data?.map((item) => (
                <div
                  className={`border ${
                    mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  } rounded shadow relative p-3`}
                  key={item._id}
                >
                  <div className='flex flex-row max-sm:flex-col gap-5'>
                    <div className='flex-1'>
                      <div className='relative w-[320px] h-[180px] max-sm:w-[280px] max-sm:h-[157px]'>
                        <Image
                          src={item.image}
                          fill
                          alt='image'
                          className='rounded object-cover'
                        />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='max-sm:ml-2'>
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-sm'>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => confirmDelete(item._id)}
                    className='absolute top-1 right-1 border border-red-300 rounded-full bg-red-700'
                  >
                    <X color='white' size={18} />
                  </div>
                </div>
              ))}
            </div>
          )}

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
      </div>
    );
  }
};

export default Dashboard;