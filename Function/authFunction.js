import axios from 'axios';
import {API_URL} from '@env';
export const registerFunction = async (form, callback) => {
  try {
    const result = await axios.post(`${API_URL}/user-sys/register`, form);

    console.log(result, 'register');
    callback(result);
  } catch (error) {
    // console.log(error, 'register');
    callback(error);
  }
};
