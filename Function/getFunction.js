import {API_URL} from '@env';
import axios from 'axios';

export const getBook = async callback => {
  try {
    const result = await axios.get(`${API_URL}/fade/fetch-infinity`);
    callback(result.data.data);
  } catch (error) {
    // console.log(error, 'kaka');
    callback(error);
  }
};
