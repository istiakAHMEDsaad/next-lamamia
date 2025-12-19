import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from './utils/db';
import { NextResponse } from 'next/server';
import User from './models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    // google Oauth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // email, password
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',

      async authorize(credentials) {
        await connect();

        try {
          const user = User.findOne({ email: credentials.email });

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            // return the user:
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong password!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (error) {
          console.error('Database error:', error.message);
          return new NextResponse(
            { message: 'Failed to fetch data' },
            { status: 500 }
          );
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
