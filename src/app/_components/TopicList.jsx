import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import Header from "./Header";
import Link from "next/link";
import DeleteBtn from "./Delete";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopic();

  return (
    <div className="w-full">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-10">Topic List</h1>
      {topics.map((data, index) => {
        console.log(data._id);
        return (
          <div className="border w-full md:w-1/3 mt-10 m-auto" key={index}>
            <div className="flex justify-between p-2 items-center">
              <div className="space-y-3">
                <p>{data.title}</p>
                <p>{data.description}</p>
              </div>
              <div className="space-x-2 flex items-center">
                <DeleteBtn id={data._id} />
                <Link
                  href={`/editTopic/${data._id}`}
                  className="bg-violet-600 p-4 rounded"
                >
                  <Pencil2Icon className=" text-white" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
