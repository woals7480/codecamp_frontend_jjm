import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin-top: 20px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContents = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;

  :hover {
    background-color: #f5f2fc;
  }
`;
