"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputName() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    router.push(`/?name=${e.target.value}`);
  };

  return (
    <input
      type="text"
      value={name}
      onChange={handleChange}
      style={{
        padding: "8px 12px",
        border: "2px solid #e1e1e1",
        borderRadius: "6px",
        fontSize: "16px",
        marginBottom: "20px",
        width: "15%",
        outline: "none",
        transition: "border-color 0.3s ease",
      }}
      placeholder="Enter name"
    />
  );
}
