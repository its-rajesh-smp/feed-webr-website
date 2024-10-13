import { Button } from "@/common/components/shadcn/button";
import { Input } from "@/common/components/shadcn/input";
import { Card, CardContent } from "@/common/components/shadcn/ui/card";
import { Label } from "@/common/components/shadcn/ui/label";
import { Textarea } from "@/common/components/shadcn/ui/textarea";
import { useContext } from "react";
import WorkspaceItemCreatorContext from "../../context/WorkspaceItemContext";
import FormQuestionsContainer from "./FormQuestionsContainer";

function Form() {
  const { workspaceData, setWorkspaceData } = useContext(
    WorkspaceItemCreatorContext
  );

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div>
            <Label htmlFor="space-name">Space name *</Label>
            <Input
              id="space-name"
              value={workspaceData.name}
              onChange={(e) =>
                setWorkspaceData({ ...workspaceData, name: e.target.value })
              }
              placeholder="Enter space name"
            />
            <p className="text-sm text-gray-500 mt-1">
              Public URL is: testimonial.to/
              {workspaceData.name.toLowerCase().replace(/\s+/g, "-")}
            </p>
          </div>

          <div>
            <Label htmlFor="space-logo">Space logo *</Label>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              <Button variant="outline">Change</Button>
            </div>
          </div>

          <div>
            <Label htmlFor="header-title">Header title *</Label>
            <Input
              id="header-title"
              value={workspaceData.title}
              onChange={(e) =>
                setWorkspaceData({ ...workspaceData, title: e.target.value })
              }
              placeholder="Would you like to give a shout-out for xyz?"
            />
          </div>

          <div>
            <Label htmlFor="custom-message">Your custom message *</Label>
            <Textarea
              id="custom-message"
              value={workspaceData.customMessage}
              onChange={(e) =>
                setWorkspaceData({
                  ...workspaceData,
                  customMessage: e.target.value,
                })
              }
              placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="custom-message">Your custom questions</Label>
            <FormQuestionsContainer />
          </div>

          <Button type="submit" className="w-full">
            Create Space
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Form;
