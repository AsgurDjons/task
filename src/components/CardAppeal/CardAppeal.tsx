import AccordionInfo from '@/components/AccordionInfo';
import type { IDataAppeal } from '@/types/IDataAppeal';

import styles from './CardAppeal.module.scss';

type Props = {
  data: IDataAppeal;
};

export const CardAppeal = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.rightInfo}>
          <div>
            Обращение № {data.id} от{' '}
            {new Date(data.createdAt).toLocaleDateString()}
          </div>

          <h2 className={styles.header}>{data.theme}</h2>

          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.leftInfo}>
          <div>{data.condition}</div>

          <div className={styles.textSmall}>Крайний срок:</div>

          <time className={styles.textTime}>
            {new Date(data.deadline).toLocaleDateString()}
          </time>

          {data.decision !== null && (
            <>
              <div className={styles.textSmall}>Решение:</div>

              <p className={styles.text}>{data.decision}</p>
            </>
          )}
        </div>
      </div>

      <AccordionInfo info={data.compositionService} />
    </div>
  );
};
