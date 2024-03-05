import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import Header from "./Header";

export default function TopicList() {
  return (
    <div className="w-full">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-10">Topic List</h1>
      <div className="border w-full md:w-1/3 mt-10 m-auto">
        <div className="flex justify-between p-2 items-center">
          <div className="space-y-3">
            <p>Topic 1</p>
            <p>Topic Description</p>
          </div>
          <div className="space-x-2">
            <button className="bg-red-600 p-4 rounded">
              <TrashIcon className=" text-white" />
            </button>
            <button className="bg-violet-600 p-4 rounded">
              <Pencil2Icon className=" text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
