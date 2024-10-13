import React, { Dispatch, SetStateAction, useState } from "react";
import { Workspace } from "../types/overview.type";

interface WorkspaceCreatorContextProps {
  workspaceData: Workspace;
  setWorkspaceData: Dispatch<SetStateAction<Workspace>>;
  handleRemoveQuestion: (id: string) => void;
  handleAddQuestion: (e: any) => void;
  onChangeQuestionText: (e: any, questionId: string) => void;
  handleCreateWorkspace: (e: any) => void;
}

/**
 * The context for the WorkspaceItemCreator component. This context holds the data for the workspace item
 * and a function to update the data.
 */
const WorkspaceCreatorContext =
  React.createContext<WorkspaceCreatorContextProps>({
    workspaceData: {
      name: "",
      customMessage: "",
      id: "",
      logo: "",
      questions: [],
      title: "",
    },
    setWorkspaceData: () => {},
    handleRemoveQuestion: () => {},
    handleAddQuestion: () => {},
    onChangeQuestionText: () => {},
    handleCreateWorkspace: () => {},
  });

/**
 * Provides the context for the WorkspaceItemCreator component. This context
 * holds the data for the workspace item and a function to update the data.
 * @param {{ children: React.ReactNode }} props The children of the component.
 * @returns {JSX.Element}
 */
function WorkspaceCreatorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [workspaceData, setWorkspaceData] = useState<Workspace>({
    name: "",
    customMessage: "",
    id: "",
    logo: "",
    questions: [],
    title: "",
  });

  /**
   * Handles the add event of a question.
   * Adds the question to the state.
   * @param {React.FormEvent<HTMLFormElement>} e The form event.
   */
  const handleAddQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWorkspaceData((prev) => {
      return {
        ...prev,
        questions: [
          ...prev.questions,
          {
            id: Date.now().toString(),
            question: "",
            type: "text",
            index: prev.questions.length,
          },
        ],
      };
    });
  };

  /**
   * Handles the remove event of a question.
   * Removes the question from the state.
   * @param {string} id The id of the question to remove.
   */
  const handleRemoveQuestion = (id: string) => {
    setWorkspaceData((prev) => {
      return {
        ...prev,
        questions: prev.questions.filter((item) => item.id !== id),
      };
    });
  };

  /**
   * Handles the change event of the question text input field.
   * Updates the question text in the state.
   * @param {React.ChangeEvent<HTMLInputElement>} e The change event.
   * @param {string} questionId The id of the question to update.
   */
  const onChangeQuestionText = (e: any, questionId: string) => {
    setWorkspaceData((prev) => {
      return {
        ...prev,
        questions: prev.questions.map((item) => {
          if (item.id === questionId) {
            return {
              ...item,
              question: e.target.value,
            };
          }
          return item;
        }),
      };
    });
  };

  const handleCreateWorkspace = (e: any) => {
    e.preventDefault();
    console.log(workspaceData);
  };

  return (
    <WorkspaceCreatorContext.Provider
      value={{
        workspaceData,
        setWorkspaceData,
        handleRemoveQuestion,
        handleAddQuestion,
        onChangeQuestionText,
        handleCreateWorkspace,
      }}
    >
      {children}
    </WorkspaceCreatorContext.Provider>
  );
}

export default WorkspaceCreatorContext;
export { WorkspaceCreatorContextProvider };
