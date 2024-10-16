export enum QuestionType {
  SHORT_TEXT = "SHORT_TEXT",
}

export interface Workspace {
  id: string;
  name: string;
  logoFile?: File | null;
  logoUrl: string;
  title: string;
  customMessage: string;
  questions: WorkspaceQuestion[];
}

export interface WorkspaceQuestion {
  id: string;
  question: string;
  type: QuestionType;
  index: number;
}
