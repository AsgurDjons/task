'use client';

import { useState } from 'react';

import styles from './AccordionInfo.module.scss';

type Props = {
  info: string;
};

export const AccordionInfo = ({ info }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.btnInfo} onClick={() => setOpen(!open)}>
        Информация
      </button>

      <div className={open ? styles.info : 'hidden'}>{info}</div>
    </div>
  );
};
