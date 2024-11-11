import { gql } from "@apollo/client";

export const GET_A_WORKSPACE_FEEDBACKS = gql`
  query getFeedbackResponses($data: GetFeedbackResponsesInput!) {
    feedbacks: getFeedbackResponses(getFeedbackInput: $data) {
      id
      UserAttachment {
        url
        id
      }
      QuestionResponse {
        id
        answer
        workspaceQuestions {
          id
        }
      }
    }
  }
`;
