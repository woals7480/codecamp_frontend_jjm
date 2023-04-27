import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int) {
    fetchPointTransactionsOfSelling(page: $page) {
      _id
      amount
      balance
      createdAt
      useditem {
        _id
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;
