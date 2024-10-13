import { WorkspaceCreatorContextProvider } from "../../context/WorkspaceCreatorContext";
import Form from "./components/Form";
import PreviewPane from "./components/PreviewPane";

function WorkspaceCreator() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create a new Space</h1>
      <p className="text-gray-600 mb-6">
        After the Space is created, it will generate a dedicated page for
        collecting testimonials.
      </p>

      <div className=" relative grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkspaceCreatorContextProvider>
          <PreviewPane />
          <Form />
        </WorkspaceCreatorContextProvider>
      </div>
    </div>
  );
}

export default WorkspaceCreator;
