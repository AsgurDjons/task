'use client';

import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';

import Input from '@/components/ui/Input';
import HiddenPasswordSvg from '@/SvgComponents/HiddenPasswordSvg';
import ShowPasswordSvg from '@/SvgComponents/ShowPasswordSvg';

import styles from './InputPassword.module.scss';

export const InputPassword = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  const onToggleSvg = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.wrapperInputPassword}>
      <Input type={showPassword ? 'text' : 'password'} {...props} />

      <div className={styles.wrapperSvg} onClick={onToggleSvg}>
        {showPassword ? <ShowPasswordSvg /> : <HiddenPasswordSvg />}
      </div>
    </div>
  );
};
