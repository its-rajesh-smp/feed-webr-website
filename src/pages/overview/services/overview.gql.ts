import { gql } from "@apollo/client";

export const GET_WORKSPACES = gql`
  query GetWorkspaces {
    workspaces: getAllWorkspaces {
      id
    }
  }
`;

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($workspaceInput: CreateWorkspaceInput!) {
    workspace: createWorkspace(workspaceInput: $workspaceInput) {
      id
    }
  }
`;
