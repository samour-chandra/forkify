<<<<<<< HEAD
import { TIMEOUT_SEC } from './config';

=======
>>>>>>> 31df338a9f0085dbe161d0dc2db1961da5c2a4ac
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
<<<<<<< HEAD
    const fetchRes = fetch(url);
    const res = await Promise.race([fetchRes, timeout(TIMEOUT_SEC)]);
    const data = res.json();

    if (!res) throw new Error(`${data.status} and ${res.message}`);

=======
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(5)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}...${res.status}`);
>>>>>>> 31df338a9f0085dbe161d0dc2db1961da5c2a4ac
    return data;
  } catch (err) {
    throw err;
  }
};
