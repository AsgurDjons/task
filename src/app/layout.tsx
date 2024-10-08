import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import type { ReactNode } from 'react';

import HomeLayout from '@/layouts/HomeLayout';
import { AuthProviders } from '@/providers/authProvider';

const inter = Inter({
  weight: ['300', '500', '700', '900'],
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'itilium',
  description: 'desnol - тестовое задание',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AuthProviders>
          <HomeLayout>{children}</HomeLayout>
        </AuthProviders>
      </body>
    </html>
  );
};

export default RootLayout;
