/* eslint-disable consistent-return */
import { v4 as uuidv4 } from 'uuid';

const appID = 'k68pvHcOSMdmNj55FwHC';
export const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}`;

class ApiACtions {
  static createApp = (URL_API) => fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  })
    .then((res) => res.text())
    .then((data) => console.log(data));

  static getBooks = (URL_API) => fetch(`${URL_API}/${appID}/books`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  static postBook = (URL_API) => fetch(`${URL_API}/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: uuidv4(),
      title: 'Cuentos de Eva Luna',
      author: 'Isabel Allende',
      category: 'Magical Realism',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.text())
    .then((data) => console.log(data));
}

export const apiCall = async (call, url) => {
  try {
    await call(url);
  } catch (err) {
    if (err.message) console.log(err);
  }
};

export default ApiACtions;
