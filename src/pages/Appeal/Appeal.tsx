import classNames from 'classnames';

import BackButton from '@/components/BackButton';
import CardAppeal from '@/components/CardAppeal';
import getDataAppeals from '@/helpers/getDataAppeal';
import type { IDataAppeal } from '@/types/IDataAppeal';

import styles from './Apeal.module.scss';

type Props = {
  idAppeal: string;
};

export const Appeal = async ({ idAppeal }: Props) => {
  const dataAppeal = await getDataAppeals<IDataAppeal>(idAppeal);

  return (
    <section className={classNames('container', styles.sectionInfo)}>
      <BackButton />

      <CardAppeal data={dataAppeal!} />

      <p className={styles.informationText}>
        Если остались вопросы, создайте новове обращение
      </p>
    </section>
  );
};
