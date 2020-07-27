import {ADD_BILL, DELETE_BILL, SET_BILLS} from './types';

export const addBill = billDetails => ({
  type: ADD_BILL,
  data: billDetails,
});

export const deleteBill = id => ({
  type: DELETE_BILL,
  id: id,
});

export const setBills = bills => ({
  type: SET_BILLS,
  data: bills,
});
