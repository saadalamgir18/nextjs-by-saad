"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
function WebDev() {
  const router = useRouter();

  return (
    <div>
      Web Dev
      <Link
        className="bg-gray-200 px-2 rounded-md"
        href={"/projects/webdev/web3"}
      >
        Web 3
      </Link>
    </div>
  );
}

export default WebDev;
