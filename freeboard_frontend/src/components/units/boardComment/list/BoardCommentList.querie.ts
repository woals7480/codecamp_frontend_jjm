import { gql } from "@apollo/client";

export const FETCH_BOARDCOMMENTS = gql`
  query ($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      writer
      contents
      rating
      createdAt
      _id
    }
  }
`;

export const DELETE_BOARDCOMMENT = gql`
  mutation ($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const UPDATE_BOARDCOMMENT = gql`
  mutation (
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      writer
      contents
      rating
      createdAt
    }
  }
`;
