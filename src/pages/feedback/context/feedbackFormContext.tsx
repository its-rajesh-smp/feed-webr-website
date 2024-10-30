import { IWorkspace } from "@/pages/overview/types/overview.type";
import React, { useState } from "react";

interface FeedbackFormContextProps {
  questionResponses: any;
  handleQuestionResponseChange: (questionId: string, answer: string) => void;
  workspace: IWorkspace;
  attachments: File[];
  handleAddAttachment: (file: File[]) => void;
  handelDeleteAddedAttachment: (name: String) => void;
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
  attachments: [],
  handleAddAttachment: () => {},
  handelDeleteAddedAttachment: () => {},
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
  const [attachments, setAttachments] = useState<File[]>([]);

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
   *  Handles the files add
   * @param files
   */
  const handleAddAttachment = (files: File[]) => {
    setAttachments((prev) => [...prev, ...files]);
    console.log(files);
  };

  /**
   *  Handles the file remove from attachment
   * @param files
   */
  const handelDeleteAddedAttachment = (name: String) => {
    // FIXME: Need to fix this currently we are deleting by  name
    setAttachments((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <feedbackFormContext.Provider
      value={{
        questionResponses,
        handleQuestionResponseChange,
        workspace,

        attachments,
        handleAddAttachment,
        handelDeleteAddedAttachment,
      }}
    >
      {children}
    </feedbackFormContext.Provider>
  );
};

export default feedbackFormContext;

export { FeedbackFormContextProvider };
