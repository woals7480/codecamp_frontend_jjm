import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border: 2px solid gray;
`;

export const TableBottom = styled.div`
  border: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  align-items: center;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 10px;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const PencilIcon = styled.img``;
