import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const UploadBukti = async (idPayment, form, callback) => {
  console.log(idPayment, form, 'kakak');

  try {
    const token = await AsyncStorage.getItem('Auth');
    const result = await axios.post(
      `${API_URL}/user-sys/transaction-payment/upload-proof`,
      {
        payment_id: idPayment,
        proof: form.proof,
        src_acc_name: form.src_acc_name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    callback(result);
  } catch (error) {
    console.log(error);
  }
};
