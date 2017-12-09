import reducer from "./reducers";
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

export const initialState = {};

export const initStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware))
  );

  return store;
};
