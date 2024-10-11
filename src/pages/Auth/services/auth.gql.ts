import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query FetchUser {
    user: fetchUser {
      id
      email
      idToken
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($userInput: UserInput!) {
    user: login(userInput: $userInput) {
      id
      email
      idToken
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($userInput: UserInput!) {
    user: register(userInput: $userInput) {
      id
      email
      idToken
    }
  }
`;
