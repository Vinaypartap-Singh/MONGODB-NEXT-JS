"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTopic = async () => {
    try {
      if (!title || !description) return alert("Please fill all the fields");

      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("Topic added successfully!");
        router.push("/");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-bold text-center">Add Topic</h1>
      <div className="border w-full md:w-1/3 mt-10 m-auto space-y-6 p-10 rounded">
        <input
          type="text"
          className="w-full p-2 text-black"
          placeholder="Topic Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 text-black"
          placeholder="Topic Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTopic} className="bg-red-600 px-8 py-3 rounded">
          Add Topic
        </button>
      </div>
    </div>
  );
}
