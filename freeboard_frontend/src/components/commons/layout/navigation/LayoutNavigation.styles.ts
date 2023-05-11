import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  background-color: #f94a4a;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  color: white;
  margin: 0 40px;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid white;
  }
`;
