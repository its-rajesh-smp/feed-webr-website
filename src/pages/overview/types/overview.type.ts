export enum QuestionType {
  SHORT_TEXT = "SHORT_TEXT",
}

export interface IWorkspace {
  id: string;
  name: string;
  logoFile?: File | null;
  logoUrl: string;
  title: string;
  customMessage: string;
  workspaceQuestions: IWorkspaceQuestion[];
}

export interface IWorkspaceQuestion {
  id: string;
  question: string;
  type: QuestionType;
  index: number;
}
