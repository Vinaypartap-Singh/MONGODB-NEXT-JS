"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopic({ params }) {
  const router = useRouter();
  const id = params.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTopic = async () => {
    if (!title || !description) return alert("Please fill all the fields");

    await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "PUT",
      "Content-Type": "application/json",
      body: JSON.stringify({ title, description }),
    });

    alert("Topic Updated successfully!");
    router.push("/");
  };
  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-bold text-center">Edit Topic</h1>
      <div className="border w-full md:w-1/3 mt-10 m-auto space-y-6 p-10 rounded">
        <input
          type="text"
          className="w-full p-2 text-black"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 text-black"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-red-600 px-8 py-3 rounded" onClick={updateTopic}>
          Update Topic
        </button>
      </div>
    </div>
  );
}
