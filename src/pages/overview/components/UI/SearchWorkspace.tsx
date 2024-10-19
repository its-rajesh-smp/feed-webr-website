import { Input } from "@/common/components/shadcn/input";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useDebounce from "@/common/hooks/useDebounce";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { getWorkspacesAct } from "../../actions/getWorkspaces.act";

function SearchWorkspace() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");

  useDebounce(searchText, 500, () => {
    dispatch(getWorkspacesAct(searchText));
  });

  return (
    <Input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      id="search workspace"
      type="search"
      icon={<BiSearch />}
      placeholder="Search workspaces by name"
      className="w-full pl-10"
    />
  );
}

export default SearchWorkspace;
