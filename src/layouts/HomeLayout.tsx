import type { ReactNode } from 'react';

import Header from '@/components/Header';

type Props = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
