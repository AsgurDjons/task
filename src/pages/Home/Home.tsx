import classNames from 'classnames';
import Link from 'next/link';

import SignInForm from '@/components/SignInForm';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <section className={classNames('container', styles.heroSection)}>
      <div className={styles.formWrapper}>
        <h1 className={styles.header}>Вход в сервис</h1>
        <SignInForm />
      </div>

      <Link className={styles.link} href={'/'}>
        Забыли пароль?
      </Link>
    </section>
  );
};
