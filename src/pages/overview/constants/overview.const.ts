import { IWorkspaceQuestion, QuestionType } from "../types/overview.type";

export const QuestionTypes = {
  SHORT_TEXT: { text: "text", value: QuestionType.SHORT_TEXT, index: 0 },
  NUMBER: { text: "number", value: QuestionType.NUMBER, index: 1 },
  EMAIL: { text: "email", value: QuestionType.EMAIL, index: 2 },
  // SELECT: { text: "select", value: QuestionType.SELECT, index: 3 },
  CHECKBOX: { text: "checkbox", value: QuestionType.CHECKBOX, index: 4 },
};

export const MandatoryQuestions: [IWorkspaceQuestion] = [
  {
    id: "1",
    question: "What is your email?",
    type: QuestionTypes.EMAIL.value,
    index: 0,
    isMandatory: true,
  },
];
