import styled from "styled-components";

const Input = styled.input`
  border-radius: ${props => props.theme.borderRadius};
  padding: 0px 16px 0px 16px;
  height: 40px;
  background-color: "white";
  color: ${props => props.theme.colors.text};
  border-width: 1px;
  line-height: 24px;
  border-style: solid;
  border-color: ${props => props.theme.colors.light};
  border-image: initial;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${props => props.theme.fontSize};
  box-sizing: border-box;

  &:focus {
    z-index: 2;
    outline: medium none currentcolor;
    box-shadow: rgba(67, 90, 111, 0.255) 0px 0px 2px inset,
      rgba(52, 152, 219, 0.604) 0px 0px 0px 1px inset,
      rgba(52, 152, 219, 0.114) 0px 0px 0px 3px;
  }
`;

export { Input };
