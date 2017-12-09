import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const Label = styled.label`
  margin-bottom: ${props => props.theme.spacing.small};
  display: inline-block;
  color: ${props => props.theme.colors.textLight};
`;
