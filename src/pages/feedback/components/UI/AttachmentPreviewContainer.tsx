import { useContext } from "react";
import feedbackFormContext from "../../context/feedbackFormContext";
import Attachment from "./Attachment";

function AttachmentPreviewContainer() {
  const { attachments } = useContext(feedbackFormContext);
  console.log(attachments);

  return (
    <div className="flex flex-col gap-1">
      {attachments.map((file: File) => (
        <Attachment key={file.lastModified} file={file} />
      ))}
    </div>
  );
}

export default AttachmentPreviewContainer;
