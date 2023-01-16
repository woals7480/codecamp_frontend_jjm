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
