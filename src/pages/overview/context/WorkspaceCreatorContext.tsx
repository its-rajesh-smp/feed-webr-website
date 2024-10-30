import React, { Dispatch, SetStateAction, useState } from "react";
import {
  IWorkspace,
  IWorkspaceQuestion,
  QuestionType,
} from "../types/overview.type";
import { MAX_UPLOAD_SIZE } from "@/common/constants/file.const";
import { MandatoryQuestions } from "../constants/overview.const";

interface WorkspaceCreatorContextProps {
  workspaceData: IWorkspace;
  setWorkspaceData: Dispatch<SetStateAction<IWorkspace>>;
  handleRemoveQuestion: (id: string) => void;
  handleAddQuestion: (e: any) => void;
  onChangeQuestionText: (updatedQuestion: IWorkspaceQuestion) => void;
  setIsCreateWorkspaceDialogOpen: Dispatch<SetStateAction<boolean>>;
  onClickImageChange: (e: any) => void;
}

/**
 * The context for the WorkspaceItemCreator component.
 */
const WorkspaceCreatorContext =
  React.createContext<WorkspaceCreatorContextProps>({
    workspaceData: {
      name: "",
      customMessage: "",
      id: "",
      logoUrl: "",
      logoFile: null,
      workspaceQuestions: [],
      title: "",
    },
    setWorkspaceData: () => {},
    handleRemoveQuestion: () => {},
    handleAddQuestion: () => {},
    onChangeQuestionText: () => {},
    setIsCreateWorkspaceDialogOpen: () => {},
    onClickImageChange: () => {},
  });

/**
 * Provides the context for the WorkspaceItemCreator component.
 * @param {{ children: React.ReactNode }} props The children of the component.
 * @returns {JSX.Element}
 */
function WorkspaceCreatorContextProvider({
  children,
  setIsCreateWorkspaceDialogOpen,
}: {
  children: React.ReactNode;
  setIsCreateWorkspaceDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [workspaceData, setWorkspaceData] = useState<IWorkspace>({
    name: "",
    customMessage: "",
    id: "",
    logoUrl: "",
    logoFile: null,
    workspaceQuestions: [...MandatoryQuestions],
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
        workspaceQuestions: [
          ...prev.workspaceQuestions,
          {
            id: Date.now().toString(),
            question: "",
            type: QuestionType.SHORT_TEXT,
            index: prev.workspaceQuestions.length,
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
        workspaceQuestions: prev.workspaceQuestions.filter(
          (item) => item.id !== id
        ),
      };
    });
  };

  /**
   * Handles the change event of the question text input field.
   * Updates the question text in the state.
   * @param {React.ChangeEvent<HTMLInputElement>} e The change event.
   * @param {string} questionId The id of the question to update.
   */
  const onChangeQuestionText = (updatedQuestion: IWorkspaceQuestion) => {
    setWorkspaceData((prev) => {
      return {
        ...prev,
        workspaceQuestions: prev.workspaceQuestions.map((item) => {
          if (item.id === updatedQuestion.id) {
            return {
              ...updatedQuestion,
            };
          }
          return item;
        }),
      };
    });
  };

  /**
   * Handle image change
   * @param e event
   */
  const onClickImageChange = (e: any) => {
    e.preventDefault();
    const newDocument = document.createElement("input");
    newDocument.type = "file";
    newDocument.accept = "image/*";
    newDocument.multiple = false;

    newDocument.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      // Validate file size
      if (file && file?.size > MAX_UPLOAD_SIZE) {
        alert("File size must be less than 5MB");
        return;
      }

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setWorkspaceData((prev) => ({
            ...prev,
            logoUrl: reader.result as string,
            logoFile: file,
          }));
        };
      }
    };
    newDocument.click();
  };

  return (
    <WorkspaceCreatorContext.Provider
      value={{
        workspaceData,
        setWorkspaceData,
        handleRemoveQuestion,
        handleAddQuestion,
        onChangeQuestionText,
        setIsCreateWorkspaceDialogOpen,
        onClickImageChange,
      }}
    >
      {children}
    </WorkspaceCreatorContext.Provider>
  );
}

export default WorkspaceCreatorContext;
export { WorkspaceCreatorContextProvider };
