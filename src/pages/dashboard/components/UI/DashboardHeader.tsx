import Avatar from "@/common/components/UI/Avatar";
import Link from "@/common/components/UI/Link";
import { BiLink } from "react-icons/bi";

function DashboardHeader() {
  return (
    <div className="h-fit flex  justify-between w-full border p-2 border-zinc-200 rounded-md shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Avatar containerClassName="rounded-md" />
          <h3>John Doe</h3>
        </div>
        <div className="flex text-xs gap-1 items-center">
          <BiLink />
          <Link>feedwebr.com/jhondoe</Link>
        </div>
      </div>
      {/* TODO: Add activity to show realtime users  */}
      {/* <div className="flex gap-2 items-center pr-10">
        <ActivitySquareIcon className="text-zinc-600" />
        <p className="text-xl">10</p>
      </div> */}
    </div>
  );
}

export default DashboardHeader;
