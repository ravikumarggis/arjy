import { useState } from "react";

export default function StyledInput({ value, setValue, placeholder = "" }) {
  return (
    <div className="flex justify-center items-center">
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400 text-gray-700"
      />
    </div>
  );
}
