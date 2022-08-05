import styled, { css } from "styled-components";

interface Props {
  outline?: boolean;
}

export const Button = styled.button`
  font-size: 22px;
  color: ${(props) => props.theme.secundary};
  padding: 8px 20px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  font-weight: bold;

  ${(props: Props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.primary};
      &:hover {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.secundary};
      }
    `}
`;
