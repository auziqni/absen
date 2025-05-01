import React from "react";
import { PrismaClient } from "@/app/generated/prisma";
import Link from "next/link";

// Create a singleton instance of PrismaClient
const prisma = new PrismaClient();

// This function gets the kelas data
async function getKelas(kodeKelas: string) {
  try {
    const kelas = await prisma.kelas.findUnique({
      where: {
        kodeKelas: kodeKelas,
      },
    });
    return kelas;
  } catch (error) {
    console.error("Error fetching kelas:", error);
    return null;
  }
}
interface PertemuanTopic {
  nomorPertemuan: number;
  topik: string | null;
}

async function getPertemuanTopic(kelasId: string): Promise<PertemuanTopic[]> {
  try {
    const pertemuanData = await prisma.pertemuanAbsensi.findMany({
      where: {
        kelasId: kelasId,
      },
      select: {
        nomorPertemuan: true,
        topik: true,
      },
      distinct: ["nomorPertemuan"],
      orderBy: {
        nomorPertemuan: "asc",
      },
    });

    // Hanya ambil nomor pertemuan dan topik
    return pertemuanData.map((pertemuan) => ({
      nomorPertemuan: pertemuan.nomorPertemuan,
      topik: pertemuan.topik,
    }));
  } catch (error) {
    console.error(`Error fetching pertemuan for kelas ${kelasId}:`, error);
    throw error;
  } finally {
    // Tidak perlu disconnect karena biasanya prisma client digunakan di seluruh aplikasi
    // Jika ingin disconnect, gunakan: await prisma.$disconnect()
  }
}

// React component using async/await pattern for Next.js server components
export default async function KodeKelas({
  params,
}: {
  params: { kodekelas: string };
}) {
  // Fetch the data
  const kelas = await getKelas(params.kodekelas);
  const pertemuanTopic = await getPertemuanTopic(kelas?.id || "");

  // If kelas is not found, show a message
  if (!kelas) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="p-4 text-center text-red-700 rounded-lg bg-red-50">
          Kelas dengan kode &quot;{params.kodekelas}&quot; tidak ditemukan
        </div>
      </main>
    );
  }

  // Display kelas data when found
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">
        Kelas: {kelas.namaKelas || "Tanpa Nama"}
      </h1>
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="mb-2">Kode Kelas: {kelas.kodeKelas}</p>
        {kelas.deskripsi && (
          <p className="mb-2">Deskripsi: {kelas.deskripsi}</p>
        )}
        {/* Add more kelas properties as needed */}
      </div>
      <div>
        <p className="flex justify-center mt-4 text-xl font-bold text-gray-600">
          PERTEMUAN
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-4 lg:grid-cols-8 lg:gap-4">
        {/* write 16 card */}
        {pertemuanTopic.map((item) => (
          <ClassCard
            key={item.nomorPertemuan}
            pertemuan={item}
            kodeKelas={kelas.kodeKelas}
          />
        ))}
      </div>
    </div>
  );
}

function ClassCard({
  pertemuan,
  kodeKelas,
}: {
  pertemuan: PertemuanTopic;
  kodeKelas: string;
}) {
  return (
    <Link
      className="flex flex-col gap-5 p-4 bg-yellow-100 border rounded-lg shadow-md lg:aspect-square"
      href={`/kelas/${kodeKelas}/${pertemuan.nomorPertemuan}`}
    >
      <div id="info_class">
        <h2 className="text-xl font-bold ">
          Pertemuan {pertemuan.nomorPertemuan}
        </h2>
      </div>

      <div className="">
        <p>Deskripsi Pertemuan {pertemuan.topik}</p>
      </div>
    </Link>
  );
}
