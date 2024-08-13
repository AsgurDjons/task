import axios from 'axios';
import { cookies } from 'next/headers';

import routes from '@/config/routes';

async function getDataAppeals<T>() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('next-auth.session-token');

    const res = await axios.get<Array<T>>(`${routes.root}${routes.appeals}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${token?.name}=${token?.value}'`,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default getDataAppeals;
