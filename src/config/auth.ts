import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import prisma from '@/prisma/prisma-client';

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(request) {
        if (!request?.email || !request.password) return null;

        const user = await prisma.user.findFirst({
          where: {
            email: request.email,
          },
        });

        if (user && user.password === request.password) {
          const userProps = { ...user, id: String(user.id) };
          return userProps as User;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/',
  },
} as AuthOptions;
