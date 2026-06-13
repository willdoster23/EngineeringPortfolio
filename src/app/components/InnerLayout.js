"use client";

import Navbar from "../components/Navbar";

export default function InnerLayout({ children }) {
  return (
    <div>
      <Navbar light={true} />
      <div className="max-w-6xl mx-auto px-6 py-20">
        {children}
      </div>
    </div>
  );
}
