import {API_URL} from '@env';
import axios from 'axios';

export const getBook = async callback => {
  callback([], true);
  try {
    const result = await axios.get(`${API_URL}/fade/fetch-infinity`);

    callback(result.data.data, false);
  } catch (error) {
    console.log(error, 'getBook');

    callback(error, true);
  }
};

export const getBestSeller = async callback => {
  try {
    const result = await axios.get(`${API_URL}/fade/book/best-seller-week`);
    callback(result);
  } catch (error) {
    callback(error);
    console.log(error, 'getBestSeller');
  }
};

export const getDetailBook = async (idBook, callback) => {
  try {
    const result = await axios.get(`${API_URL}/fade/book/detail/${idBook}`);
    callback(result.data.data);
  } catch (error) {
    console.log(error, 'getDetailBook');
  }
};
