"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Projects() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-center">This is the page for projects</h1>
      <button
        className="bg-gray-200 px-2 rounded-md"
        onClick={() => router.push("/projects/webdev")}
      >
        WebDev
      </button>
    </div>
  );
}

export default Projects;
