import * as Yup from 'yup';

export const ValidationRegister = Yup.object().shape({
  name: Yup.string().required('nama di butuhkan'),
  email: Yup.string().email('Invalid Email').required('email dibutuhkan'),
  password: Yup.string()
    .min(6, 'Password Too Short')
    .required('must add password'),
  password1: Yup.string()
    // .required('do not empty')
    .oneOf([Yup.ref('password'), null], 'Password Must Match'),
});

export const ValidationLogin = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('email dibutuhkan'),
  password: Yup.string()
    .min(6, 'Password Too Short')
    .required('must add password'),
});
