import React from "react";

import { Kelas, PrismaClient } from "@/app/generated/prisma";
import Link from "next/link";

async function getClasses() {
  const prisma = new PrismaClient();
  const classes = await prisma.kelas.findMany();
  return classes;
}

export default async function KelasPage() {
  const classes = await getClasses();
  return (
    <main className="relative ">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {classes.map((kelas: Kelas) => (
          <ClassCard key={kelas.id} kelas={kelas} />
        ))}
      </div>
    </main>
  );
}

function ClassCard({ kelas }: { kelas: Kelas }) {
  return (
    <Link
      className="flex flex-col gap-5 p-4 bg-yellow-100 border rounded-lg shadow-md lg:aspect-square"
      href={`/kelas/${kelas.kodeKelas}`}
    >
      <div id="info_class">
        <p className="font-bold text-gray-600 ">{kelas.kodeKelas}</p>
        <h2 className="text-xl font-bold ">{kelas.namaKelas}</h2>
      </div>

      <div className="">
        <p>{kelas.deskripsi}</p>
      </div>
    </Link>
  );
}
