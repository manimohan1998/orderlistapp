// app/dashboard/layout.tsx
"use client";

import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar />
      </aside>

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="mt-16 p-6">{children}</main>
      </div>
    </div>
  );
}
