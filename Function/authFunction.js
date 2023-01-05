import axios from 'axios';
import {API_URL} from '@env';
import DeviceInfo from 'react-native-device-info';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

export const registerFunction = async (form, callback) => {
  try {
    const result = await axios.post(`${API_URL}/user-sys/register`, form);

    console.log(result, 'register');
    callback(result);
  } catch (error) {
    console.log(error, 'register');
    callback(error);
  }
};

export const loginFunction = async (form, callback) => {
  // console.log(form, 'form login');
  try {
    const device_id = await DeviceInfo.getAndroidId().then(
      androidId => androidId,
    );

    const result = await axios.post(`${API_URL}/user-sys/auth-basic`, {
      device_id,
      ...form,
    });

    // const data = {device_id, ...form};
    console.log(result, 'res');
    callback(result);
    // console.log(result);
  } catch (error) {
    console.log(error, 'err Login Function');
    callback(error);
  }
};

export const onSignin = callback => {
  GoogleSignin.configure({
    webClientId: `863991149007-64d4a47jhkuorfeuadi141th4anudfut.apps.googleusercontent.com`,
  });
  callback();
};
