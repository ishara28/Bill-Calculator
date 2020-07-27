import uuid from 'react-native-uuid';
import {ADD_BILL, DELETE_BILL, SET_BILLS} from '../actions/types';
import {deleteBill} from '../actions/bills';

const initialState = {
  billList: [],
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      return {
        ...state,
        billList: state.billList.concat({
          id: uuid.v1(),
          value: action.data,
        }),
      };
    case DELETE_BILL:
      return {
        ...state,
        billList: state.billList.filter(x => x.id != action.id),
      };
    case SET_BILLS:
      return {
        ...state,
        billList: action.data,
      };
    default:
      return state;
  }
};
