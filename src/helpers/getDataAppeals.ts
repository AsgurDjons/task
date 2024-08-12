import axios from 'axios';

import routes from '@/config/routes';

async function getDataAppeals<T>() {
  try {
    const res = await axios.get<Array<T>>(`${routes.root}${routes.appeals}`);

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default getDataAppeals;
