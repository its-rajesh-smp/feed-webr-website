import { MAX_ATTACHMENT_UPLOAD_SIZE } from "@/common/constants/file.const";
import { DEFAULT_ATTACHMENT_IMAGE } from "@/common/constants/images.const";
import { Dispatch, SetStateAction, useContext } from "react";
import feedbackFormContext from "../context/feedbackFormContext";

function AddAttachment({
  setIsAddAttachmentDialogOpen,
}: {
  setIsAddAttachmentDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { handleAddAttachment } = useContext(feedbackFormContext);

  const onChange = (e: any) => {
    let files = e.target.files;

    // FIXME: Need to check this and fix the max file size
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size >= MAX_ATTACHMENT_UPLOAD_SIZE) {
        console.log("Max upload size is < 1 MB");
        return;
      }
    }
    handleAddAttachment(files);
    setIsAddAttachmentDialogOpen(false);
  };

  return (
    <div className="flex cursor-pointer flex-col relative  justify-center items-center h-full">
      <input
        onChange={onChange}
        type="file"
        className=" absolute cursor-pointer opacity-0 h-full w-full"
        multiple={true}
      />
      <img className="w-10 h-10" src={DEFAULT_ATTACHMENT_IMAGE} />
      <p>Add or Drop Attachment</p>
    </div>
  );
}

export default AddAttachment;
