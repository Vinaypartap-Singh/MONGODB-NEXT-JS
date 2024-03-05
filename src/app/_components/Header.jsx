import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-violet-600 text-white">
      <h1>VTLIST</h1>
      <div>
        <ul>
          <li>
            <Link href={"/addTopic"}>Add Topic</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
