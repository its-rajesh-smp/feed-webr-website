import { gql } from "@apollo/client";

const GET_A_WORKSPACE = gql`
  query getAWorkspace($id: String!) {
    workspace: getAWorkspace(id: $id) {
      id
      title
      logoUrl
      name
      accessUrl
    }
  }
`;

export default GET_A_WORKSPACE;
