import { Input } from "@/common/components/shadcn/input";
import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import { Textarea } from "@/common/components/shadcn/ui/textarea";
import { QuestionType } from "@/pages/overview/types/overview.type";

function QuestionAnswer({ type }: { type: string }) {
  switch (type) {
    case QuestionType.EMAIL:
      return <Input type="email" />;
    case QuestionType.NUMBER:
      return <Input type="number" />;
    case QuestionType.SHORT_TEXT:
      return <Textarea />;
    case QuestionType.CHECKBOX:
      return <Checkbox />;
  }

  return <div>QuestionAnswer</div>;
}

export default QuestionAnswer;
