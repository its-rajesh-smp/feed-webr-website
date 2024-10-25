import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { QuestionTypes } from "@/pages/overview/constants/overview.const";
import WorkspaceCreatorContext from "@/pages/overview/context/WorkspaceCreatorContext";
import { IWorkspaceQuestion } from "@/pages/overview/types/overview.type";
import { useContext } from "react";
import { RiDraggable } from "react-icons/ri";

function FormQuestion(props: IWorkspaceQuestion) {
  const { question, type, isMandatory, isRequired } = props;
  const { onChangeQuestionText } = useContext(WorkspaceCreatorContext);

  return (
    <div className="flex items-center  mb-4  gap-4">
      <RiDraggable />
      <div
        className={
          "bg-white  rounded-md flex flex-col gap-2 p-2 shadow-md  w-full "
        }
      >
        <input
          onChange={(e: any) =>
            onChangeQuestionText({ ...props, question: e.target.value })
          }
          value={question}
          placeholder="What is your question?"
          className="w-full border  h-10 rounded-md pl-2"
        />

        <div className="flex gap-2 items-center">
          <Select
            onValueChange={(type: any) =>
              onChangeQuestionText({ ...props, type })
            }
            value={type}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Question Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(QuestionTypes).map((questionType) => (
                <SelectItem key={questionType.value} value={questionType.value}>
                  {questionType.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Checkbox
            onCheckedChange={(e: any) => {
              onChangeQuestionText({ ...props, isRequired: e });
            }}
            checked={isMandatory || isRequired}
            disabled={isMandatory}
            label={` ${isMandatory ? "Mandatory" : "Required"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default FormQuestion;
