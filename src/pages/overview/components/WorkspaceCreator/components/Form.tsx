import { Button } from "@/common/components/shadcn/button";
import { Input } from "@/common/components/shadcn/input";
import { Card, CardContent } from "@/common/components/shadcn/ui/card";
import { Label } from "@/common/components/shadcn/ui/label";
import { Textarea } from "@/common/components/shadcn/ui/textarea";
import { useContext } from "react";

import { MAX_UPLOAD_SIZE } from "@/common/constants/file.const";
import WorkspaceCreatorContext from "@/pages/overview/context/WorkspaceCreatorContext";
import createWorkspaceSchema from "@/pages/overview/schemas/createWorkspace.schema";
import { CREATE_WORKSPACE } from "@/pages/overview/services/overview.gql";
import { useMutation } from "@apollo/client";
import { ThumbsUp } from "lucide-react";
import FormQuestionsContainer from "./UI/FormQuestionsContainer";

function Form() {
  const { workspaceData, setWorkspaceData } = useContext(
    WorkspaceCreatorContext
  );

  const [createWorkspace, { loading }] = useMutation(CREATE_WORKSPACE);

  const onClickImageChange = (e: any) => {
    e.preventDefault();
    const newDocument = document.createElement("input");
    newDocument.type = "file";
    newDocument.accept = "image/*";
    newDocument.multiple = false;

    newDocument.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      // Validate file size
      if (file && file?.size > MAX_UPLOAD_SIZE) {
        alert("File size must be less than 5MB");
        return;
      }

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setWorkspaceData((prev) => ({
            ...prev,
            logoUrl: reader.result as string,
            logoFile: file,
          }));
        };
      }
    };
    newDocument.click();
  };

  const handleCreateWorkspace = async (e: any) => {
    e.preventDefault();
    try {
      const validatedData = await createWorkspaceSchema.parse(workspaceData);

      const payload = {
        ...validatedData,
      };

      const data = await createWorkspace({
        variables: {
          workspaceInput: payload,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center rounded-lg">
                {workspaceData?.logoUrl ? (
                  <img
                    src={workspaceData.logoUrl}
                    alt="logo"
                    className="rounded-lg"
                  />
                ) : (
                  <ThumbsUp className="text-white w-8 h-8" />
                )}
              </div>
              <Button onClick={onClickImageChange} variant="outline">
                Change
              </Button>
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

          <Button
            onClick={handleCreateWorkspace}
            type="submit"
            className="w-full"
          >
            Create Space
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Form;