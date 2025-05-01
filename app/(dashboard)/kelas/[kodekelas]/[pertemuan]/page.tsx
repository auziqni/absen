import React from "react";
import { PrismaClient, PertemuanAbsensi } from "@/app/generated/prisma";
const prisma = new PrismaClient();

async function isKelasExists(kodeKelas: string): Promise<boolean> {
  try {
    // Mencari kelas berdasarkan ID
    const kelas = await prisma.kelas.findUnique({
      where: {
        kodeKelas: kodeKelas,
      },
      select: {
        id: true, // Hanya pilih ID untuk efisiensi query
      },
    });

    // Jika kelas ditemukan (tidak null), kembalikan true
    // Jika tidak ditemukan (null), kembalikan false
    return kelas !== null;
  } catch (error) {
    console.error(`Error checking kelas ${kodeKelas}:`, error);
    throw error;
  }
}

interface dataabsen extends PertemuanAbsensi {
  mahasiswa: {
    id: string;
    nama: string;
  };
}

async function getPertemuanKelas({
  kodeKelas,
  pertemuan,
}: {
  kodeKelas: string;
  pertemuan: string;
}) {
  try {
    const data: dataabsen[] = await prisma.pertemuanAbsensi.findMany({
      where: {
        kelasId: kodeKelas,
        nomorPertemuan: parseInt(pertemuan), // Pastikan pertemuan adalah angka
      },
      include: {
        mahasiswa: {
          select: {
            id: true,
            nama: true,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.error(`Error fetching pertemuan for kelas ${pertemuan}:`, error);
    throw error;
  }
}
interface PageParams {
  params: Promise<{
    kodekelas: string;
    pertemuan: string;
  }>;
}

export default async function PertemuanPage({ params }: PageParams) {
  const { kodekelas, pertemuan } = await params;
  const kelas = await isKelasExists(kodekelas);
  const absenpertemuan = await getPertemuanKelas({
    kodeKelas: kodekelas,
    pertemuan: pertemuan,
  });

  console.log("absenpertemuan", absenpertemuan);

  // If kelas is not found, show a message
  if (!kelas) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="p-4 text-center text-red-700 rounded-lg bg-red-50">
          Kelas dengan kode &quot;{kodekelas}&quot; tidak ditemukan
        </div>
      </main>
    );
  }

  if (absenpertemuan.length === 0) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="p-4 text-center text-red-700 rounded-lg bg-red-50">
          Pertemuan dengan nomor &quot;{pertemuan}&quot; tidak ditemukan
        </div>
      </main>
    );
  }

  return (
    <div>
      <div>
        <h1>Kelas: {kodekelas}</h1>
        <h2>Pertemuan: {pertemuan}</h2>
      </div>

      <div>
        <h3>Data Absen Pertemuan</h3>
        <table className="min-w-full border border-collapse border-gray-200">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300">NIM</th>
              <th className="p-2 border border-gray-300">Nama</th>
              <th className="p-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {absenpertemuan.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border border-gray-300">
                  {item.mahasiswa.id}
                </td>
                <td className="p-2 border border-gray-300">
                  {item.mahasiswa.nama}
                </td>
                <td className="p-2 border border-gray-300">
                  {item.statusKehadiran}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
