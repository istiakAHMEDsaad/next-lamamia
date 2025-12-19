'use client';

import Button from '@/components/buttons/Button';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      <p>Login</p>
      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className='px-5 py-2 rounded bg-emerald-700 text-xl text-white cursor-pointer'
      >
        Google Login
      </button>
      <button
        onClick={() => signOut({ callbackUrl: '/dashboard' })}
        className='px-5 py-2 rounded bg-red-700 text-xl text-white cursor-pointer'
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
