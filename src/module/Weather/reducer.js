import Types from './type';

const initialState = {
  data: '',
  error: '',
  isLoading: false,
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_DATA:
      return {...state, data: action.payload, error: '', isLoading: true};
    case Types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
