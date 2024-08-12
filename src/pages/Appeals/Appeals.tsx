import { TableAppeals } from '@/components/TableAppeals/TableAppeals';
import getDataAppeals from '@/helpers/getDataAppeals';
import type { IDataAppeal } from '@/types/IDataAppeal';

import styles from './Appeals.module.scss';

export const Appeals = async () => {
  const dataAppeals = await getDataAppeals<IDataAppeal | undefined>();

  return (
    <>
      <section className={'container'}>
        <div className={styles.wrapperTable}>
          {dataAppeals !== undefined ? (
            <TableAppeals dataAppend={dataAppeals} />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};
