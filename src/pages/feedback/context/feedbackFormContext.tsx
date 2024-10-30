import { IWorkspace } from "@/pages/overview/types/overview.type";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SUBMIT_REVIEW_FORM } from "../services/reviewForm.gql";

interface FeedbackFormContextProps {
  questionResponses: any;
  handleQuestionResponseChange: (questionId: string, answer: string) => void;
  workspace: IWorkspace;
  onFormSubmit: (e: any) => void;
}

/**
 * The context for the Feedback Form component.
 */
const feedbackFormContext = React.createContext<FeedbackFormContextProps>({
  questionResponses: [],
  handleQuestionResponseChange: () => {},
  workspace: {
    name: "",
    customMessage: "",
    id: "",
    logoUrl: "",
    logoFile: null,
    workspaceQuestions: [],
    title: "",
  },
  onFormSubmit: () => {},
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
        questionResponses,
      },
    },
  });

  /**
   * Handles the change event of a question response.
   * @param questionId
   * @param answer
   */
  const handleQuestionResponseChange = (questionId: string, answer: string) => {
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

  /**
   * Handles the submit event of the form.
   * @param e event
   */
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    submitReviewForm();
  };

  return (
    <feedbackFormContext.Provider
      value={{
        questionResponses,
        handleQuestionResponseChange,
        workspace,
        onFormSubmit,
      }}
    >
      {children}
    </feedbackFormContext.Provider>
  );
};

export default feedbackFormContext;

export { FeedbackFormContextProvider };
