import { Loader2Icon } from "lucide-react";

const PageLoading = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Loader2Icon className="animate-spin size-16 text-primary " />
    </div>
  );
};

export default PageLoading;
