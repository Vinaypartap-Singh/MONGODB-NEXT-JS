export default function AddTopic() {
  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-bold text-center">Add Topic</h1>
      <div className="border w-full md:w-1/3 mt-10 m-auto space-y-6 p-10 rounded">
        <input type="text" className="w-full p-2" placeholder="Topic Name" />
        <input
          type="text"
          className="w-full p-2"
          placeholder="Topic Description"
        />
        <button className="bg-red-600 px-8 py-3 rounded">Add Topic</button>
      </div>
    </div>
  );
}
