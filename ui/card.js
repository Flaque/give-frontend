import styled from "styled-components";
import Container from "./container";

export default Container.extend`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.light};
  box-shadow: 0 11px 22px 0 rgba(0, 0, 0, 0.05);
`;
