import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { initStore } from "../store";
import theme from "../ui/theme";

// Base CSS
injectGlobal`
html,
body,
#__next,
body > div:first-child,
#__next > div:first-child {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${theme.colors.text};
}
*,
*:after,
*:before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3;
}
`;

const store = initStore();

const Background = styled.div`
  background: ${({ theme }) => theme.colors.extraLight};
  height: 100%;
`;

export default ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Background> {children} </Background>
    </ThemeProvider>
  </Provider>
);
