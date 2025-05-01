"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
//TODO: uncomment this when clerk is set up
// import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  // const { isSignedIn, user, isLoaded } = useUser();
  return (
    <nav className="relative h-[64px] bg-[#001636] flex items-center justify-between px-20">
      <div id="logo" className="h-[55px] w-[213px] relative flex items-center ">
        {/* <Image
          src={`/logo.png`}
          alt="Next.js logo"
          //   height={55}
          //   width={213}
          fill
          style={{ objectFit: "contain" }}
          priority
        /> */}
        <span className="self-center text-2xl font-bold text-white whitespace-nowrap">
          FACE
        </span>
      </div>

      <div>
        <ul className="flex items-center gap-6 font-medium text-white font-grenze">
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#layanan">Layanan</a>
          </li>
          <li>
            <a href="#tentang">Hubungi Kami</a>
          </li>
          {/* {!isSignedIn && (
            <li>
              <a href="/sign-up">Daftar</a>
            </li>
          )} */}

          <li>
            <Link
              href={"/dashboard"}
              className="py-3 font-semibold text-black bg-white rounded-sm px-7"
            >
              {/* {isSignedIn ? "Dashboard" : "Masuk"} */}
              masuk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
