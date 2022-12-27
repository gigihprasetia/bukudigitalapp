const initialState = {
  isLogin: {
    status: false,
    token: '',
  },
};

const authRedux = (state = initialState, action) => {
  if (action.type === 'auth') {
    console.log(action, 'auth');
    return {
      ...state,
      isLogin: {
        status: action.data.status,
        token: action.data.token,
      },
    };
  } else {
    console.log(state, 'cekState');
    return state;
  }
};

export default authRedux;
