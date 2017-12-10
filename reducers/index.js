import { combineReducers } from "redux";
import { UPDATE_EMAIL, UPDATE_PASSWORD } from "../actions/index";

const register = (state = { email: "", password: "" }, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      });
    default:
      return state;
  }
};

const app = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ app, register });
