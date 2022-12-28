import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation boardType($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
