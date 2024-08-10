import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
