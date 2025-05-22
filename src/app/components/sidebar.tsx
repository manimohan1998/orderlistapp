import React from "react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white-600 text-black h-screen shadow-md p-4">
    <nav className="space-y-4 mt-20">
      <Link href="/dashboard" className="flex items-center space-x-2 hover:text-black-200">
        <span>Dashboard</span>
      </Link>
      <Link href="/login" className="flex items-center space-x-2 hover:text-black-200">
        <span>Logout</span>
      </Link>
    </nav>
  </aside>
  );
}
