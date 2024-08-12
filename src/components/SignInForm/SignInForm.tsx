'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';

import Input from '@/components/ui/Input';
import { InputPassword } from '@/components/ui/InputPassword/InputPassword';

import styles from './SignInForm.module.scss';

type FormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const submit = async (data: FormValues) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      reset();

      if (res && !res.error) {
        router.push('/appeals');
      } else {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => submit(data))}
      className={styles.signInForm}
    >
      <div className={styles.wrapperInput}>
        <Controller
          control={control}
          rules={{
            required: `Введите логин`,
            maxLength: {
              value: 32,
              message: `*Не больше 32 символов`,
            },
          }}
          render={({ field: { onChange, onBlur } }) => (
            <Input
              placeholder="Введите логин или email"
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
          name="email"
        />

        <span id="email-error" className={styles.error}>
          {errors?.email?.message}
        </span>
      </div>

      <div className={styles.wrapperInput}>
        <Controller
          control={control}
          rules={{
            required: `Введите пароль`,
            maxLength: {
              value: 15,
              message: `*Не больше 15 символов`,
            },
          }}
          render={({ field: { onChange, onBlur } }) => (
            <InputPassword
              placeholder="Введите пароль"
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
          name="password"
        />

        <span id="password-error" className={styles.error}>
          {errors?.password?.message}
        </span>
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={!isValid}>
        Войти
      </button>
    </form>
  );
};
