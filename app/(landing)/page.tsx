import Hero from "@/components/hero1";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      hello
      <Link href={"/dashboard"}> klik ini dashboard</Link>
    </main>
  );
}
