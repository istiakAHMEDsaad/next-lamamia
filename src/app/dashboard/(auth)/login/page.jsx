'use client';

import { useContext, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { ThemeContext } from '@/context/ThemeContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LoaderSpinner from '@/components/loader/LoaderSpinner';

const Login = () => {
  const { mode } = useContext(ThemeContext);
  const { status } = useSession();
  const router = useRouter();

  // Redirect authenticated users away from login page
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      toast.error('Invalid email or password!');
      return;
    }

    toast.success('Welcome back!');

    setTimeout(() => {
      router.replace('/dashboard');
    }, 800);
  };

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center h-screen'>
        <LoaderSpinner />
      </div>
    );
  }


  return (
    <div className='flex items-center justify-center mb-10'>
      <form
        onSubmit={handleLogin}
        className={`border border-gray-300 ${
          mode === 'dark' ? 'bg-gray-100' : 'bg-gray-50'
        } text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10`}
      >
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
          Login Now
        </h2>

        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          required
          className='w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4'
        />

        <input
          name='password'
          type='password'
          placeholder='Enter your password'
          required
          className='w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4'
        />

        <button
          type='submit'
          className='w-full mb-3 bg-[#4aaf7c] hover:bg-[#53c38a] active:scale-95 transition py-2.5 rounded-full text-white'
        >
          Log in
        </button>

        <p className='text-center mt-4'>
          Don&apos;t have an account?{' '}
          <Link href='/dashboard/register' className='text-blue-500 underline'>
            Signup Now
          </Link>
        </p>

        <button
          type='button'
          onClick={() => signIn('google')}
          className='w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 hover:bg-gray-200/60'
        >
          <Image
            height={16}
            width={16}
            src='https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png'
            alt='google'
          />
          Log in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
