import { gql } from "@apollo/client";

export const CREATE_BOARDCOMMENT = gql`
  mutation ($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      writer
      contents
      rating
      createdAt
    }
  }
`;
