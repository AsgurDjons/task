import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};
