import styled from "@emotion/styled";
import { ITextTokenProps } from "./MyItems.types";

export const Wrapper = styled.div`
  width: 100%;
  margin: 100px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

export const OptionMyitems = styled.span`
  font-weight: bold;
  border-bottom: 2px solid #5729ff;
  cursor: pointer;
`;

export const OptionMyPicked = styled.span`
  cursor: pointer;
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
  width: 12%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 52%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 12%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ColumnTitle = styled.div`
  width: 52%;
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

export const EditButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const PencilIcon = styled.img``;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
