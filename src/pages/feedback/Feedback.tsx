import { Card } from "@/common/components/shadcn/ui/card";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Form from "./components/pages/Form";
import { GET_REVIEW_FORM } from "./services/reviewForm.gql";
import { FeedbackFormContextProvider } from "./context/feedbackFormContext";
import { useState } from "react";
import ThankYou from "./components/pages/ThankYou";

function Feedback() {
  const params = useParams();
  const [currentPageView, setCurrentPageView] = useState(0);

  const { data, loading } = useQuery(GET_REVIEW_FORM, {
    variables: { accessUrl: params?.accessUrl },
  });

  return (
    !loading && (
      <div className="lg:p-20 p-2  flex justify-center">
        <Card className="p-6  w-full lg:w-1/3">
          {/* FIXME: Magic number need to fix */}
          {currentPageView === 0 && (
            // TODO: Need to fix the way of prop drilling
            <FeedbackFormContextProvider workspace={data?.reviewForm}>
              <Form setCurrentPageView={setCurrentPageView} />
            </FeedbackFormContextProvider>
          )}
          {currentPageView === 1 && <ThankYou />}
        </Card>
      </div>
    )
  );
}

export default Feedback;
