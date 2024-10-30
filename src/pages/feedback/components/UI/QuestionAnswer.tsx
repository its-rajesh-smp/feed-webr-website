import { Input } from "@/common/components/shadcn/input";
import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import { Textarea } from "@/common/components/shadcn/ui/textarea";
import { QuestionType } from "@/pages/overview/types/overview.type";
import { useContext } from "react";
import feedbackFormContext from "../../context/feedbackFormContext";

function QuestionAnswer({ type, id }: { type: string; id: string }) {
  const { onQuestionResponseChange } = useContext(feedbackFormContext);

  const onInputChange = (e: any) => {
    onQuestionResponseChange(id, e.target.value);
  };

  const onCheckboxChange = (isChecked: boolean) => {
    onQuestionResponseChange(id, `${isChecked}`);
  };

  switch (type) {
    case QuestionType.EMAIL:
      return <Input onChange={onInputChange} type="email" />;
    case QuestionType.NUMBER:
      return <Input onChange={onInputChange} type="number" />;
    case QuestionType.SHORT_TEXT:
      return <Textarea onChange={onInputChange} />;
    case QuestionType.CHECKBOX:
      return <Checkbox onCheckedChange={onCheckboxChange} />;
  }
}

export default QuestionAnswer;
