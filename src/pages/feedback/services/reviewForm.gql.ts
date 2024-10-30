import { gql } from "@apollo/client";

export const GET_REVIEW_FORM = gql`
  query getFeedbackForm($accessUrl: String) {
    reviewForm: getFeedbackForm(accessUrl: $accessUrl) {
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

export const SUBMIT_REVIEW_FORM = gql`
  mutation submitFeedbackForm($reviewFormInput: SubmitFeedbackFormInput) {
    submittedFeedback: submitFeedbackForm(feedbackInput: $reviewFormInput)
  }
`;
