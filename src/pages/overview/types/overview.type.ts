export interface WorkspaceItem {
  id: string;
  name: string;
  logo: string;
  title: string;
  customMessage: string;
  questions: WorkspaceQuestion[];
}

export interface WorkspaceQuestion {
  id: string;
  question: string;
  type: string;
  index: number;
}
