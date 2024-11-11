import { GET_A_WORKSPACE_FEEDBACKS } from "@/pages/dashboard/services/workspace-inbox.gql";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function Inbox() {
  const { workspaceId, inboxType } = useParams();

  const { data } = useQuery(GET_A_WORKSPACE_FEEDBACKS, {
    variables: {
      data: {
        workspaceId,
        inboxType,
      },
    },
  });
  console.log(data);

  return <div>Inbox</div>;
}

export default Inbox;
