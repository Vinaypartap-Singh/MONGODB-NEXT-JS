"use client"; // This line seems to be a placeholder or comment.

import { TrashIcon } from "@radix-ui/react-icons"; // Importing TrashIcon from a package named "@radix-ui/react-icons".

export default function DeleteBtn({ id }) {
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "DELETE",
    });

    alert("Topic deleted successfully!");
  };
  return (
    <button // Rendering a button.
      onClick={handleDelete} // Attaching the handleDelete function to the onClick event.
      className="bg-red-500 text-white p-4 rounded" // Applying CSS classes for styling.
    >
      <TrashIcon className="text-white" />
    </button>
  );
}
