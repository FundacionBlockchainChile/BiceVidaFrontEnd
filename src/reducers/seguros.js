const initialState = {
  insurance: null,
  // insurance: {
  //   name: null,
  //   description: null,
  //   image: null,
  // },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEGURO':
      return {
        insurance: action.insurance,
      };
    default:
      return state;
  }
};
