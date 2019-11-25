import {
  SMURFDATA_LOAD_START,
  SMURFDATA_LOAD_FAILURE,
  SMURFDATA_LOAD_SUCCESS
} from '../actions';

//unable to use {object} here, throws error
const initialState = {
  isLoading: false,
  name: '',
  age: [],
  height: [],
  id: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFDATA_LOAD_START:
      return {
        ...state
      };
    case SMURFDATA_LOAD_SUCCESS:
      return {
        ...state,
        name: { ...state.name },
        age: { ...state.age },
        height: { ...state.height },
        id: { ...state.id },
        isLoading: false
      };
    case SMURFDATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
