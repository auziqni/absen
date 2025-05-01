"use client";
import { useState } from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="relative grid w-screen grid-cols-12">
      <Sidebar
        className={cn(isOpen ? "flex" : "hidden", " lg:flex col-span-2")}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="relative flex flex-col w-full col-span-12 lg:col-span-10">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
