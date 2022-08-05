import styled from "styled-components";

export const Input = styled.input`
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray};
  padding: 8px 20px;
  outline: none;
  font-size: 20px;
  color: ${(props) => props.theme.secundary};
`;
