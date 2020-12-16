import axios from 'axios';

export const setSeguro = ({ insurance }) => {
  return {
    type: 'SET_SEGURO',
    insurance: insurance,
  };
};

export const fetchSeguroFailed = () => {
  return {
    type: 'FETCH_SEGURO_FAILED',
  };
};

export const getSeguro = (id) => {
  let url = `https://dn8mlk7hdujby.cloudfront.net/interview/insurance/` + id;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setSeguro(response.data));
      })
      .catch((error) => {
        dispatch(fetchSeguroFailed(error));
      });
  };
};
