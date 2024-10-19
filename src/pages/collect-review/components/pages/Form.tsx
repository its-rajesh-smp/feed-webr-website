import { Button } from "@/common/components/shadcn/button";
import { Paperclip, ThumbsUp } from "lucide-react";
import Question from "../UI/Question";

function Form() {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="bg-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <ThumbsUp className="text-white w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{"Header goes here..."}</h2>
        <p className="text-gray-600">{"Your custom message goes here..."}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">QUESTIONS</h3>
        <ul className="list-disc space-y-2 text-gray-600">
          <Question />
        </ul>
      </div>
      <div className="space-y-2">
        <Button className="w-full flex items-center justify-center">
          <Paperclip className="mr-2 h-4 w-4" /> Attach file
        </Button>
        <Button variant="outline" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;