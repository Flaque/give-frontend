import api from "../api";

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updateEmail = email => {
  return { type: UPDATE_EMAIL, email: email };
};

export const updatePassword = password => {
  return { type: UPDATE_PASSWORD, password: password };
};

export const sendRegistration = () => (dispatch, getState) => {
  const state = getState();
  api.register(state.register.email, state.register.password).then(response => {
    dispatch(updateEmail(""));
    dispatch(updatePassword(""));
  });
};
