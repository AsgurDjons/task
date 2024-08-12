import axios from 'axios';

import routes from '@/config/routes';

async function getDataAppeals<T>(id: string) {
  try {
    const res = await axios.get<T>(
      `${routes.root}${routes.searchAppeal}?id=${id}`
    );

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default getDataAppeals;
