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

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;
