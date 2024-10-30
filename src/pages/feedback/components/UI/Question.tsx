import { IWorkspaceQuestion } from "@/pages/overview/types/overview.type";
import QuestionAnswer from "./QuestionAnswer";

function Question({
  question,
  isMandatory,
  isRequired,
  type,
  id,
}: IWorkspaceQuestion) {
  return (
    <div className="flex flex-col gap-1">
      <p>
        {question}{" "}
        {(isMandatory || isRequired) && <span className="text-red-500">*</span>}{" "}
      </p>
      <QuestionAnswer key={id} id={id} type={type} />
    </div>
  );
}

export default Question;
