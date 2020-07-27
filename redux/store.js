import { createStore, combineReducers } from "redux";
import { billReducer } from "./reducers/billReducer";

const rootReducer = combineReducers({
  billReducer: billReducer,
});

const configureStore = () => createStore(rootReducer);
export default configureStore;
