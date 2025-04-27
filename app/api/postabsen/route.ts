import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, StatusKehadiran } from "@/app/generated/prisma";

const prisma = new PrismaClient();

type reqData = {
  mahasiswaId: string;
  pertemuanId: string;
};

export async function POST(request: Request) {
  try {
    const body: reqData = await request.json();

    // Validasi input
    if (!body.mahasiswaId || !body.pertemuanId) {
      return NextResponse.json(
        { error: "mahasiswaId dan pertemuanId diperlukan" },
        { status: 400 }
      );
    }

    try {
      // Periksa apakah mahasiswa ada dan merupakan STUDENT
      const mahasiswa = await prisma.user.findUnique({
        where: { id: body.mahasiswaId },
      });

      if (!mahasiswa || mahasiswa.role !== "STUDENT") {
        return NextResponse.json(
          { error: "Mahasiswa tidak ditemukan" },
          { status: 404 }
        );
      }

      // Periksa apakah pertemuan ada
      const pertemuan = await prisma.pertemuan.findUnique({
        where: { id: body.pertemuanId },
      });

      if (!pertemuan) {
        return NextResponse.json(
          { error: "Pertemuan tidak ditemukan" },
          { status: 404 }
        );
      }

      // Cari catatan absensi yang sudah ada
      const existingAbsensi = await prisma.absensi.findFirst({
        where: {
          mahasiswaId: body.mahasiswaId,
          pertemuanId: body.pertemuanId,
        },
      });

      let absensi;

      if (existingAbsensi) {
        // Update catatan yang sudah ada
        absensi = await prisma.absensi.update({
          where: { id: existingAbsensi.id },
          data: {
            statusKehadiran: StatusKehadiran.HADIR,
            jamAbsen: new Date(), // Update waktu absen
            updatedAt: new Date(),
          },
        });
      } else {
        // Buat catatan baru
        absensi = await prisma.absensi.create({
          data: {
            mahasiswa: {
              connect: { id: body.mahasiswaId },
            },
            pertemuan: {
              connect: { id: body.pertemuanId },
            },
            statusKehadiran: StatusKehadiran.HADIR,
            jamAbsen: new Date(),
          },
        });
      }

      return NextResponse.json({
        message: existingAbsensi
          ? "Absensi berhasil diperbarui"
          : "Absensi berhasil dicatat",
        data: absensi,
      });
    } catch (error) {
      console.error("Error mencatat absensi:", error);
      return NextResponse.json(
        { error: "Terjadi kesalahan saat memproses absensi" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
