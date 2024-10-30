import { Card } from "@/common/components/shadcn/ui/card";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Form from "./components/pages/Form";
import { GET_REVIEW_FORM } from "./services/reviewForm.gql";
import { FeedbackFormContextProvider } from "./context/feedbackFormContext";

function Feedback() {
  const params = useParams();

  const { data, loading } = useQuery(GET_REVIEW_FORM, {
    variables: { accessUrl: params?.accessUrl },
  });

  return (
    !loading && (
      <div className="lg:p-20 p-2  flex justify-center">
        <Card className="p-6  w-full lg:w-1/3">
          <FeedbackFormContextProvider workspace={data?.reviewForm}>
            <Form />
          </FeedbackFormContextProvider>
          {/* <ThankYou /> */}
        </Card>
      </div>
    )
  );
}

export default Feedback;
