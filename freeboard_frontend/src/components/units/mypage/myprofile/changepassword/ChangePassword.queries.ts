import { gql } from "@apollo/client";

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: string) {
    resetUserPassword(password: $password)
  }
`;
