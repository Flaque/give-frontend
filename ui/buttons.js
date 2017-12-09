import styled from "styled-components";

export const Button = styled.button`
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.025em;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  transition: all 0.15s ease;
  border: 1px solid ${props => props.theme.colors.light};
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      white,
      ${props => props.theme.colors.extraLight}
    );
    transform: translateY(-1px);
    box-shadow: 3 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const PrimaryButton = Button.extend`
  color: white;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.lightPrimary};
    border: 1px solid ${props => props.theme.colors.lightPrimary};
    transform: translateY(-1px);
    box-shadow: 3 3px 6px rgba(0, 0, 0, 0.08);
  }
`;
