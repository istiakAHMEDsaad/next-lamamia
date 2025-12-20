'use client';

import { useContext, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import LoginSVG from '@/assets/Devices-bro.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Register = () => {
  const { mode } = useContext(ThemeContext);
  //#53c38a
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const finalData = { name, email, password };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (res.status === 201) {
        toast.success('Account has been created');
        router.push('/dashboard/login?success=Account has been created');
      }
      // res.status === 201 &&
      //   router.push('/dashboard/login?success=Account has been created');
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className='my-10'>
      <div className='flex md:flex-row max-sm:flex-col-reverse items-center justify-center'>
        {/* right section */}
        <div className='flex-1'>
          <div className='flex flex-col items-center justify-center'>
            <form
              className={`border border-gray-300 ${
                mode === 'dark' ? 'bg-gray-100' : 'bg-gray-50'
              } text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10`}
              onSubmit={handleSubmit}
            >
              <h2
                className={`text-2xl font-bold mb-6 text-center text-gray-800`}
              >
                Sign Up
              </h2>

              <input
                id='name'
                className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3'
                type='text'
                name='name'
                placeholder='Username'
                required
              />
              <input
                id='email'
                className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
              <input
                id='password'
                className='w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3'
                type='text'
                name='password'
                placeholder='Password'
                required
              />

              <button
                type='submit'
                className='w-full mb-3 bg-[#4aaf7c] hover:bg-[#53c38a] transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer'
              >
                Create Account
              </button>

              <p className='mt-2 text-center'>
                {err && 'Something went wrong!'}
              </p>

              <p className='text-center mt-4'>
                Already have an account?{' '}
                <Link
                  href='/dashboard/login'
                  className='text-blue-500 underline'
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* left section image */}
        <div className='flex-1 max-sm:hidden'>
          <div className='h-[500px] max-sm:w-80 max-sm:80 relative'>
            <Image
              src={LoginSVG}
              alt='hero banner'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
