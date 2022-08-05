import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.black};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
