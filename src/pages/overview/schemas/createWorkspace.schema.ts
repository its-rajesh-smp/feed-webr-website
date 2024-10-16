import { z } from "zod";

// Define WorkspaceQuestion schema without the id field
const workspaceQuestionSchema = z.object({
  question: z.string(),
  type: z.string(),
  index: z.number(),
});

// Define Workspace schema without the id field
const createWorkspaceSchema = z.object({
  name: z.string(),
  logoUrl: z.string(),
  title: z.string(),
  customMessage: z.string().optional(),
  questions: z.array(workspaceQuestionSchema),
});

export default createWorkspaceSchema;
