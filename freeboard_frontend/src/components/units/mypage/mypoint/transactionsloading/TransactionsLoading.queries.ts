import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;
