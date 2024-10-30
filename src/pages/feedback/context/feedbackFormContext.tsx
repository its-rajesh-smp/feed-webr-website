import { IWorkspace } from "@/pages/overview/types/overview.type";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SUBMIT_REVIEW_FORM } from "../services/reviewForm.gql";

interface FeedbackFormContextProps {
  questionResponses: any;
  onQuestionResponseChange: (questionId: string, answer: string) => void;
  workspace: IWorkspace;
}

/**
 * The context for the Feedback Form component.
 */
const feedbackFormContext = React.createContext<FeedbackFormContextProps>({
  questionResponses: [],
  onQuestionResponseChange: () => {},
  workspace: {
    name: "",
    customMessage: "",
    id: "",
    logoUrl: "",
    logoFile: null,
    workspaceQuestions: [],
    title: "",
  },
});

/**
 * Provides the context for the Feedback Form component.
 * @param {{ children: React.ReactNode }} props The children of the component.
 * @returns {JSX.Element}
 */
const FeedbackFormContextProvider = ({
  children,
  workspace,
}: {
  children: React.ReactNode;
  workspace: IWorkspace;
}) => {
  const [questionResponses, setQuestionResponses] = useState<any>([]);

  const [submitReviewForm] = useMutation(SUBMIT_REVIEW_FORM, {
    variables: {
      reviewFormInput: {
        accessUrl: workspace?.accessUrl,
        questionResponses: [
          {
            questionId: "13359e23-3730-41a3-a749-21db576dc406",
            answer: "hello@gmail.com",
          },
        ],
      },
    },
  });

  const onQuestionResponseChange = (questionId: string, answer: string) => {
    setQuestionResponses((prev: any) => {
      // Checking if the question response already exists
      const existingResponse = prev.find(
        (response: any) => response.questionId === questionId
      );

      // If the question response already exists, update the answer
      if (existingResponse) {
        existingResponse.answer = answer;
        return [...prev];
      }
      // If the question response doesn't exist, add it
      return [...prev, { questionId, answer }];
    });
  };

  console.log(questionResponses);

  return (
    <feedbackFormContext.Provider
      value={{ questionResponses, onQuestionResponseChange, workspace }}
    >
      {children}
    </feedbackFormContext.Provider>
  );
};

export default feedbackFormContext;

export { FeedbackFormContextProvider };
