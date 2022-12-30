const initialState = {
  Query: '',
};

export const QueryState = (state = initialState, action) => {
  if (action.type === 'typing') {
    console.log(action, 'ajaj');
    return {
      ...state,
      Query: action.data,
    };
  } else {
    return state;
  }
};
