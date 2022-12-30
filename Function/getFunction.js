import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const getDetailBook = async (idBook, callback, callback2) => {
  try {
    const result = await axios.get(`${API_URL}/fade/book/detail/${idBook}`);
    const result2 = await axios.get(
      `${API_URL}/fade/book/relate-author/${idBook}`,
    );
    callback(result.data.data);
    callback2(result2.data.data);
  } catch (error) {
    console.log(error, 'getDetailBook');
  }
};

export const getQueryBook = async (type, params, callback) => {
  if (type === 'Kategori') {
    try {
      const result = await axios.get(
        `${API_URL}/fade/book/search?q=&c=${params}`,
      );
      // console.log(result, 'kategori');
      callback(result);
    } catch (error) {
      console.log(error, 'kategory');
    }
  } else {
    try {
      const result = await axios.get(`${API_URL}/fade/book/search?q=${params}`);
      callback(result);
    } catch (error) {
      console.log(error, 'keyword');
    }
  }
};

export const getPayment = async (idPayment, callback) => {
  try {
    const token = await AsyncStorage.getItem('Auth');
    const result = await axios.get(
      `${API_URL}/user-sys/transaction-inquiry-pay/${idPayment}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    callback(result);
  } catch (error) {
    console.log(error, 'getDetailBook');
  }
};

export const getCollectionBook = async callback => {
  try {
    const token = await AsyncStorage.getItem('Auth');
    const result = await axios.get(`${API_URL}/user-sys/book-subscription`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    callback(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTransaction = async callback => {
  try {
    const token = await AsyncStorage.getItem('Auth');
    const result = await axios.get(`${API_URL}/user-sys/transaction-history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    callback(result);
  } catch (error) {
    console.log(error);
  }
};
