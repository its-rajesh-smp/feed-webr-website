import { Card } from "@/common/components/shadcn/ui/card";
import ThankYou from "./components/pages/ThankYou";

function CollectReview() {
  return (
    <div className="lg:p-20 p-2  flex justify-center">
      <Card className="p-6  w-full lg:w-1/3">
        {/* <Form /> */}
        <ThankYou />
      </Card>
    </div>
  );
}

export default CollectReview;
