import WorkspaceCreatorContext from "@/pages/overview/context/WorkspaceCreatorContext";
import { WorkspaceQuestion } from "@/pages/overview/types/overview.type";
import { useContext } from "react";
import { RiDraggable } from "react-icons/ri";

function FormQuestion({ id, question }: WorkspaceQuestion) {
  const { onChangeQuestionText } = useContext(WorkspaceCreatorContext);

  return (
    <div className="flex items-center  mb-4  gap-4">
      <RiDraggable />
      <div className={"bg-white rounded-md shadow-md  w-full "}>
        <input
          onChange={(e: any) => onChangeQuestionText(e, id)}
          value={question}
          className="w-full  h-10 rounded-md pl-2"
        />
      </div>
    </div>
  );
}

export default FormQuestion;
