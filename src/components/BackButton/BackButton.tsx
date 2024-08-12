'use client';

import { useRouter } from 'next/navigation';

import styles from './BackButton.module.scss';

export const BackButton = () => {
  const route = useRouter();

  return (
    <button className={styles.btn} onClick={route.back}>
      Назад
    </button>
  );
};
