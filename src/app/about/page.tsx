"use client";
import React from "react";
import { useRouter } from "next/navigation";
function About() {
  const router = useRouter();
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typscript",
    "react",
    "Node",
    "Postgress",
    "Git & Github",
    "Docker",
  ];
  return (
    <div className="flex flex-col">
      <button className="" onClick={() => router.push("/")}>
        Home
      </button>
      <h1 className="text-center text-4xl">
        I am learning full stack web developlemnt from PIAIC
      </h1>
      <ul className="text-center">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
