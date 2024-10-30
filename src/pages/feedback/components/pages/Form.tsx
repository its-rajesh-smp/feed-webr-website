import { Button } from "@/common/components/shadcn/button";
import { ThumbsUp } from "lucide-react";
import { useContext } from "react";
import feedbackFormContext from "../../context/feedbackFormContext";
import AddAttachmentBtn from "../UI/AddAttachmentBtn";
import AttachmentPreviewContainer from "../UI/AttachmentPreviewContainer";
import Question from "../UI/Question";
import { useMutation } from "@apollo/client";
import { SUBMIT_REVIEW_FORM } from "../../services/reviewForm.gql";

function Form() {
  const { workspace, questionResponses, attachments } =
    useContext(feedbackFormContext);

  const [submitReviewForm, { loading }] = useMutation(SUBMIT_REVIEW_FORM, {
    variables: {
      reviewFormInput: {
        accessUrl: workspace?.accessUrl,
        questionResponses,
      },
    },
  });

  /**
   * Handel form submission
   * @param e
   */
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    submitReviewForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="text-center mb-6">
        <div className="bg-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          {workspace?.logoUrl ? (
            <img
              src={workspace.logoUrl}
              alt="logo"
              className="rounded-full w-16 h-16 object-cover"
            />
          ) : (
            <ThumbsUp className="text-white w-8 h-8" />
          )}
        </div>
        <h2 className="text-2xl font-bold mb-2">{workspace.title}</h2>
        <p className="text-gray-600">{workspace.customMessage}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">QUESTIONS</h3>
        <ul className="list-disc space-y-2 text-gray-600">
          {workspace?.workspaceQuestions?.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        {attachments?.length > 0 && <AttachmentPreviewContainer />}
        <AddAttachmentBtn />
        <Button
          loading={loading}
          type="submit"
          onClick={onFormSubmit}
          variant="outline"
          className="w-full"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
