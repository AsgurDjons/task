'use client';

import { useSession, signOut } from 'next-auth/react';

import styles from './SignOut.module.scss';

export const SignOut = () => {
  const session = useSession();
  const isBtn = session.status === 'authenticated';

  return (
    <>
      {isBtn && (
        <button
          className={styles.btn}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Выйти
        </button>
      )}
    </>
  );
};
