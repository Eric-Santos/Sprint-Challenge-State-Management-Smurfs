import {
  SMURFDATA_LOAD_START,
  SMURFDATA_LOAD_FAILURE,
  SMURFDATA_LOAD_SUCCESS,
  ADD_SMURF,
  DELETE_SMURF
} from '../actions';

const initialState = {
  smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  ],
  isLoading: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURFDATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurf: action.payload
      };
    case SMURFDATA_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        error: ''
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      };
    default:
      return state;
  }
};

export default reducer;
