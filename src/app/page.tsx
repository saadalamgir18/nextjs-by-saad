import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Link href={"/about"} className="bg-gray-200 px-2 rounded-md">
          About
        </Link>
      </div>
      <h1 className="text-3xl my-5">
        Hello, I am <b>Saad Alamgir</b> and this is assignment
        <b> Navigating with Next.js </b>.
      </h1>
    </div>
  );
}
export default HomePage;
