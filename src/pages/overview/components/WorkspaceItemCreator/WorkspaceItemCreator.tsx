import Form from "./Form";
import PreviewPane from "./PreviewPane";

function WorkspaceItemCreator() {
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Create a new Space</h1>
      <p className="text-gray-600 mb-6">
        After the Space is created, it will generate a dedicated page for
        collecting testimonials.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PreviewPane />
        <Form />
      </div>
    </div>
  );
}

export default WorkspaceItemCreator;
