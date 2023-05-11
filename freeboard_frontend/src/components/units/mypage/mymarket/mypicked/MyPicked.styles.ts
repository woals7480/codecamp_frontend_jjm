import styled from "@emotion/styled";
import { ITextTokenProps } from "./MyPicked.types";

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
  cursor: pointer;
`;

export const OptionMyPicked = styled.span`
  cursor: pointer;
  font-weight: bold;
  border-bottom: 2px solid #f94a4a;
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
  width: 13%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 61%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 13%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ColumnTitle = styled.div`
  width: 61%;
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

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
