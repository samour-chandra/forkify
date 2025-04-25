import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const fetchRes = fetch(url);
    const res = await Promise.race([fetchRes, timeout(TIMEOUT_SEC)]);
    const data = res.json();

    if (!res) throw new Error(`${data.status} and ${res.message}`);

    return data;
  } catch (err) {
    throw err;
  }
};
