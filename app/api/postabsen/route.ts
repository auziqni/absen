import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, StatusKehadiran } from "@/app/generated/prisma";

const prisma = new PrismaClient();

type reqData = {
  mahasiswaId: string;
  noPertemuan: number;
  kodeKelas: string;
  statusKehadiran: StatusKehadiran;
  keterangan?: string;
  lokasi?: string;
};

export async function POST(req: NextRequest) {
  try {
    // Mendapatkan data dari body request
    const body = (await req.json()) as reqData;
    const {
      mahasiswaId,
      noPertemuan,
      kodeKelas,
      statusKehadiran,
      keterangan,
      lokasi,
    } = body;

    // Validasi input
    if (!mahasiswaId || !noPertemuan || !kodeKelas || !statusKehadiran) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Validasi status kehadiran
    if (!Object.values(StatusKehadiran).includes(statusKehadiran)) {
      return NextResponse.json(
        { message: "Status kehadiran tidak valid" },
        { status: 400 }
      );
    }

    // Cari kelas berdasarkan kodeKelas
    const kelas = await prisma.kelas.findUnique({
      where: { kodeKelas },
    });

    if (!kelas) {
      return NextResponse.json(
        { message: "Kelas tidak ditemukan" },
        { status: 404 }
      );
    }

    // Cari pertemuan untuk mendapatkan nomorPertemuan dan kelasId
    const pertemuan = await prisma.pertemuanAbsensi.findFirst({
      where: {
        nomorPertemuan: noPertemuan,
        kelasId: kelas.id,
      },
      select: {
        nomorPertemuan: true,
        kelasId: true,
      },
    });

    if (!pertemuan) {
      return NextResponse.json(
        { message: "Pertemuan tidak ditemukan" },
        { status: 404 }
      );
    }

    // Cek apakah mahasiswa terdaftar di kelas ini
    const mahasiswaKelas = await prisma.mahasiswaKelas.findUnique({
      where: {
        mahasiswaId_kelasId: {
          mahasiswaId,
          kelasId: kelas.id,
        },
      },
    });

    if (!mahasiswaKelas) {
      return NextResponse.json(
        { message: "Mahasiswa tidak terdaftar di kelas ini" },
        { status: 400 }
      );
    }

    // Perbarui atau buat data kehadiran
    const absensi = await prisma.pertemuanAbsensi.upsert({
      where: {
        kelasId_nomorPertemuan_mahasiswaId: {
          kelasId: pertemuan.kelasId,
          nomorPertemuan: pertemuan.nomorPertemuan,
          mahasiswaId,
        },
      },
      update: {
        statusKehadiran,
        jamAbsen: new Date(),
        lokasi: lokasi || null,
        keterangan: keterangan || null,
      },
      create: {
        kelasId: pertemuan.kelasId,
        nomorPertemuan: pertemuan.nomorPertemuan,
        mahasiswaId,
        tanggalPertemuan: new Date(), // Asumsi tanggal pertemuan adalah saat ini jika baru dibuat
        statusKehadiran,
        jamAbsen: new Date(),
        lokasi: lokasi || null,
        keterangan: keterangan || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Kehadiran berhasil diperbarui",
      data: absensi,
    });
  } catch (error) {
    console.error("Error updating attendance:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server", error: String(error) },
      { status: 500 }
    );
  } finally {
    // Pastikan untuk menutup koneksi Prisma jika ini adalah standalone request
    await prisma.$disconnect();
  }
}
