import { Button } from "@/common/components/shadcn/button";
import { DEFAULT_ATTACHMENT_IMAGE } from "@/common/constants/images.const";
import byteSize from "byte-size";
import { useContext, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import feedbackFormContext from "../../context/feedbackFormContext";

function Attachment({ file }: { file: File }) {
  const { handelDeleteAddedAttachment } = useContext(feedbackFormContext);

  const [attachmentImage, setAttachmentImage] = useState(
    DEFAULT_ATTACHMENT_IMAGE
  );

  // WARNING: Might break because we are setting the state in the if statement directly
  if (file.type.includes("image")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setAttachmentImage(reader.result as string);
    };
  }

  /**
   * On file remove
   * @param e event
   */
  const onRemoveAttachment = (e: any) => {
    e.preventDefault();
    console.log(file.name);
    handelDeleteAddedAttachment(file.name);
  };

  return (
    <div className="border p-2 w-full justify-between items-center rounded-md flex gap-2 ">
      <div className="flex gap-2 items-center">
        <img className="w-10 h-10" src={attachmentImage} />
        <div>
          <p>{file.name}</p>
          <p>{`${byteSize(file.size)}`}</p>
        </div>
      </div>
      <Button
        onClick={onRemoveAttachment}
        variant="ghost"
        className="hover:bg-red-100 hover:text-red-500"
        icon={<RiCloseLine />}
      ></Button>
    </div>
  );
}

export default Attachment;
