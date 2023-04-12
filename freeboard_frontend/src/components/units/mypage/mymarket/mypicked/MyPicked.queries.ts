import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
