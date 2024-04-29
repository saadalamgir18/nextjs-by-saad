import Image from "next/image";
import Link from "next/link";
import React from "react";
import next from "../../public/next.svg";
function Header() {
  return (
    <div>
      <nav className="mx-10 mt-10 flex justify-between">
        <Link href={"/"}>
          <Image src={next} height={100} width={100} alt="Home" />
        </Link>
        <Link className="bg-gray-200 px-2 rounded-md" href={"/projects"}>
          Projects
        </Link>
        <Link className="bg-gray-200 px-2 rounded-md" href={"/contactus/"}>
          Contact US
        </Link>
      </nav>
    </div>
  );
}

export default Header;
