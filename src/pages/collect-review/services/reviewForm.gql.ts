import { gql } from "@apollo/client";

export const GET_REVIEW_FORM = gql`
  query GetReviewForm($accessUrl: String) {
    reviewForm: getReviewForm(accessUrl: $accessUrl) {
      id
      title
      logoUrl
      name
      accessUrl
      workspaceQuestions {
        id
        question
        type
        isMandatory
        isRequired
      }
    }
  }
`;
