import styled, { css } from "styled-components";

interface Props {
  medium?: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.primary};
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.white};
  ${(props: Props) =>
    props.medium &&
    css`
      color: ${(props) => props.theme.primary};
      font-size: 28px;
    `}
`;
