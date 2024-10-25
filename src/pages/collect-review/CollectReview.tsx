import { Card } from "@/common/components/shadcn/ui/card";
import Form from "./components/pages/Form";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEW_FORM } from "./services/reviewForm.gql";

function CollectReview() {
  const params = useParams();

  const { data, loading } = useQuery(GET_REVIEW_FORM, {
    variables: { accessUrl: params?.accessUrl },
  });

  return (
    !loading && (
      <div className="lg:p-20 p-2  flex justify-center">
        <Card className="p-6  w-full lg:w-1/3">
          <Form formData={data?.reviewForm} />
          {/* <ThankYou /> */}
        </Card>
      </div>
    )
  );
}

export default CollectReview;
