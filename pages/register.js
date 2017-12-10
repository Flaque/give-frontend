import Head from "../components/head";
import Page from "../components/page";
import Card from "../ui/card";
import Centered from "../ui/centered";
import Register from "../components/register";
import { connect, Provider } from "react-redux";
import { initStore } from "../store";
import {
  updateEmail,
  updatePassword,
  sendRegistration
} from "../actions/index";

const eventValue = e => e.target.value;

const RegisterPagePresenter = props => (
  <Page>
    <Head title="register" />

    <Centered>
      <Card>
        <Register {...props} />
      </Card>
    </Centered>
  </Page>
);

const mapStateToProps = state => {
  return {
    email: state.register.email,
    password: state.register.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: e => dispatch(updateEmail(eventValue(e))),
    changePassword: e => dispatch(updatePassword(eventValue(e))),
    sendRegistraiton: () => dispatch(sendRegistration())
  };
};

const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(() => (
  <RegisterPagePresenter />
));

const store = initStore();

const ThisPage = () => (
  <Provider store={store}>
    <RegisterPage />
  </Provider>
);

export default ThisPage;
