import { Button } from "@/common/components/shadcn/button";
import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import WorkspaceItemCreatorContext from "../../../../context/WorkspaceItemContext";
import FormQuestion from "./FormQuestion";

function FormQuestionsContainer() {
  let {
    workspaceData: { questions },
    setWorkspaceData,
    handleAddQuestion,
  } = useContext(WorkspaceItemCreatorContext);

  /**
   * Handles the drag end event of the questions list.
   * Updates the index of the question in the state.
   * @param {any} result The result of the drag end event.
   * @returns {void}
   */
  const handleOnDragEnd = (result: any) => {
    let sourceIndex = result.source.index;
    let destinationIndex = result.destination.index;
    setWorkspaceData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[sourceIndex].index = destinationIndex;
      updatedQuestions[destinationIndex].index = sourceIndex;
      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  return (
    <div className="space-y-4 border p-3 rounded-md ">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable type="group" droppableId="droppable-area-1">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {questions
                .sort((a, b) => a.index - b.index)
                .map((item) => (
                  <Draggable
                    draggableId={item.id}
                    index={item.index}
                    key={item.id}
                    shouldRespectForcePress={true}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="!static !z-10"
                      >
                        <FormQuestion {...item} key={item.id} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button onClick={handleAddQuestion}>Add Question</Button>
    </div>
  );
}

export default FormQuestionsContainer;
