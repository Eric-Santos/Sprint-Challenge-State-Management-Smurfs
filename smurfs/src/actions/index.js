import axios from 'axios';

export const SMURFDATA_LOAD_START = 'RATESDATA_LOAD_START';
export const SMURFDATA_LOAD_SUCCESS = 'RATESDATA_LOAD_SUCCESS';
export const SMURFDATA_LOAD_FAILURE = 'RATESDATA_LOAD_FAILURE';

export const getSmurfData = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({
        type: SMURFDATA_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SMURFDATA_LOAD_FAILURE,
        payload: 'error loading data'
      });
    });
};
