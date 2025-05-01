"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Nfc,
  Settings,
  Activity,
  Footprints,
  UserRound,
  Power,
  MoveLeft,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
// import { FreeCounter } from "@/components/free-counter";
// TODO: uncomment this when clerk is set up
// import { SignOutButton } from "@clerk/nextjs";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const routes = [
  {
    label: "Dashboard",
    icon: Footprints,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Kelas",
    icon: Activity,
    href: "/kelas",
    color: "text-violet-500",
  },
  {
    label: "Pengumuman",
    icon: UserRound,
    href: "/pengumuman",
    color: "text-amber-500",
  },
  {
    label: "Setting",
    icon: Nfc,
    href: "/setting",
    color: "white",
  },
];

export default function SidebarDashboard({
  isOpen,
  setIsOpen,
  className,
}: SidebarProps) {
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="sidebar"
      className={twMerge(
        " sticky top-0 h-screen min-w-60 z-10 bg-[#000D20] lg:flex flex-col  justify-between pb-10 items-center gap-3",
        className
      )}
    >
      <div className="relative flex flex-col w-full">
        <div
          id="sidebar-header"
          className="w-[90%] py-5 flex flex-col gap-2 items-center  border-b-2 border-slate-400 relative"
        >
          <MoveLeft
            className="absolute top-0 right-0 text-white lg:hidden"
            onClick={handleClick}
          ></MoveLeft>
          <div className="text-center text-white ">
            <h1 className="font-bold">face</h1>
            <span>kepanjangan face</span>
          </div>
          <Link href="/">
            <Image
              src={`/logoface.png`}
              alt="Next.js logo"
              height={150}
              width={150}
              style={{ objectFit: "contain" }}
              priority
              className=""
            />
          </Link>
        </div>
        <div id="sidebar-content" className=" w-[90%] ">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="w-full h-10 p-3 text-white ">
        <SignOutButton>
          <div className="flex text-red-200 cursor-pointer">
            <Power className="w-5 h-5 mr-3" />
            Sign Out
          </div>
        </SignOutButton>
      </div> */}
    </div>
  );
}
