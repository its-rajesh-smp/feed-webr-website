import { Input } from "@/common/components/shadcn/input";
import { BiSearch } from "react-icons/bi";

function SearchWorkspace() {
  return (
    <Input
      id="search workspace"
      type="search"
      icon={<BiSearch />}
      placeholder="Search testimonials by name, email, or keywords"
      className="w-full pl-10"
    />
  );
}

export default SearchWorkspace;
