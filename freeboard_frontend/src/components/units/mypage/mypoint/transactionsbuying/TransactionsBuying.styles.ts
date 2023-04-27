import styled from "@emotion/styled";
import { IColumnProps, ITextTokenProps } from "./TransactionsBuying.types";

export const Wrapper = styled.div`
  width: 100%;
  margin: 100px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionCurrentPage = styled.span`
  font-weight: bold;
  border-bottom: 2px solid #5729ff;
  cursor: pointer;
`;

export const OptionNonCurrentPage = styled.span`
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
  cursor: pointer;
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ChargingButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #917be5;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ColumnStatus = styled.div`
  width: 25%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props: IColumnProps) =>
    props.isStatus === "충전" || props.isStatus === "판매" ? "#5728FF" : "red"};
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
