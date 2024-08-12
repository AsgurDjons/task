import classNames from 'classnames';
import Image from 'next/image';

import { SignOut } from '@/components/SignOut/SignOut';
import logo from '@/public/images/logo.png';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.wrapperHeader)}>
        <div className={styles.wrapperLogo}>
          <Image className={styles.logoImage} src={logo} alt={'logo'} />

          <p className={styles.logoText}>itilium</p>
        </div>

        <SignOut />
      </div>
    </header>
  );
};
