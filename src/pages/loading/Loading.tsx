import Loader from "@/common/components/UI/Loader";

function Loading() {
  return (
    <div className="flex gap-2 h-screen w-screen justify-center items-center">
      <Loader className="text-3xl" />
      <p className="text-3xl">Loading...</p>
    </div>
  );
}

export default Loading;
