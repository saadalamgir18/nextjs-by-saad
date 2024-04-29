"use client";
import React from "react";
import { useRouter } from "next/navigation";
function ContactUS() {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Us</h1>
      <button
        className="bg-gray-200 px-2 rounded-md"
        onClick={() => router.push("/contactus/company")}
      >
        Company profile
      </button>
    </div>
  );
}

export default ContactUS;
