/* eslint-disable consistent-return */
export const appID = 'eoftDK3SQrCcULVifYs3';
const endpoints = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}`;

const createApp = (URL_API) => fetch(URL_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.text())
  .then((data) => data);
const getAppId = async () => {
  try {
    await createApp(endpoints);
  } catch (err) {
    console.log(err);
  }
};

export default getAppId;
