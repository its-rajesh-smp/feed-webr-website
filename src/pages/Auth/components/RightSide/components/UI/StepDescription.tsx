export interface StepDescriptionProps {
  title?: string;
  description?: string;
  alignment?: "left" | "right" | "center";
}

function StepDescription({
  alignment = "center",
  description,
  title,
}: StepDescriptionProps) {
  let containerClassName = "";

  switch (alignment) {
    case "left":
      containerClassName = "flex flex-col items-start";
      break;
    case "right":
      containerClassName = "flex flex-col items-end";
      break;
    case "center":
      containerClassName = "flex flex-col items-center";
      break;
  }

  return (
    <div className={containerClassName}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default StepDescription;
