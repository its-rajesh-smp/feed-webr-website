import { gql } from "@apollo/client";

export const WORKSPACE_FIELDS = gql`
  fragment WorkspaceFields on Workspace {
    id
    title
    logoUrl
    name
    accessUrl
  }
`;

export const GET_WORKSPACES = gql`
  query GetWorkspaces {
    workspaces: getAllWorkspaces {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`;

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($workspaceInput: CreateWorkspaceInput!) {
    workspace: createWorkspace(workspaceInput: $workspaceInput) {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`;
