import { Modal } from "antd";
import { GraphQLClient, gql } from "graphql-request";
import { IQuery } from "../types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export const getUserInfo = async (newAccessToken: string) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backendonline.codebootcamp.co.kr/graphql",
      {
        headers: { Authorization: `Bearer ${newAccessToken}` },
        credentials: "include",
      }
    );
    const result = await graphQLClient.request<
      Pick<IQuery, "fetchUserLoggedIn">
    >(FETCH_USER_LOGGED_IN);
    const userInfo = result.fetchUserLoggedIn;
    return userInfo;
  } catch (error) {
    if (error instanceof Error) Modal.error({ content: error.message });
  }
};