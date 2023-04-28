import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      name
      price
      createdAt
      soldAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
