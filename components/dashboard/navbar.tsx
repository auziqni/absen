import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
//todo: uncomment this when clerk is set up
// import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarrDashboard({ isOpen, setIsOpen }: NavbarProps) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white shadow-lg text-black h-[64px] py-2 justify-between flex px-6 ">
      <div className="flex items-center gap-3">
        <Menu
          className={cn("cursor-pointer text-black", "w-10 h-10 ", "lg:hidden")}
          onClick={handleClick}
        ></Menu>

        <Image
          src="/logoiterafix.jpg"
          alt="hero"
          height={50}
          width={43}
          priority
        />
        <Image src="/logoel.png" alt="hero" height={50} width={50} priority />
      </div>
      {/* <UserButton /> */}
    </div>
  );
}
