import styled, { css } from "styled-components";

interface Props {
  column?: boolean;
  gap?: string;
  flex?: string;
}

export const Card = styled.article`
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secundary};
  padding: 20px;
  gap: ${(props: Props) => props.gap};
  flex: ${(props) => props.flex};

  ${(props: Props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;
