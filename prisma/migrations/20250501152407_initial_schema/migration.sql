-- CreateEnum
CREATE TYPE "StatusKehadiran" AS ENUM ('HADIR', 'TELAT', 'IZIN', 'SAKIT', 'ALPHA', 'NONE');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dosen" (
    "id" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "noHP" TEXT,
    "alamat" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "id" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "noHP" TEXT,
    "alamat" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" TEXT NOT NULL,
    "kodeKelas" TEXT NOT NULL,
    "namaKelas" TEXT NOT NULL,
    "pinKelas" TEXT NOT NULL,
    "hariPertemuan" TEXT NOT NULL,
    "jumlahPertemuan" INTEGER NOT NULL,
    "statusAktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dosenUtamaId" TEXT NOT NULL,
    "dosenPendampingId" TEXT,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MahasiswaKelas" (
    "id" TEXT NOT NULL,
    "mahasiswaId" TEXT NOT NULL,
    "kelasId" TEXT NOT NULL,
    "tanggalGabung" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusAktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MahasiswaKelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PertemuanAbsensi" (
    "id" TEXT NOT NULL,
    "nomorPertemuan" INTEGER NOT NULL,
    "tanggalPertemuan" TIMESTAMP(3) NOT NULL,
    "topik" TEXT,
    "catatan" TEXT,
    "mahasiswaId" TEXT NOT NULL,
    "statusKehadiran" "StatusKehadiran" NOT NULL DEFAULT 'NONE',
    "jamAbsen" TIMESTAMP(3),
    "lokasi" TEXT,
    "keterangan" TEXT,
    "kelasId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PertemuanAbsensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_nip_key" ON "Dosen"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_email_key" ON "Dosen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_nim_key" ON "Mahasiswa"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_email_key" ON "Mahasiswa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_kodeKelas_key" ON "Kelas"("kodeKelas");

-- CreateIndex
CREATE UNIQUE INDEX "MahasiswaKelas_mahasiswaId_kelasId_key" ON "MahasiswaKelas"("mahasiswaId", "kelasId");

-- CreateIndex
CREATE INDEX "PertemuanAbsensi_kelasId_nomorPertemuan_idx" ON "PertemuanAbsensi"("kelasId", "nomorPertemuan");

-- CreateIndex
CREATE INDEX "PertemuanAbsensi_mahasiswaId_idx" ON "PertemuanAbsensi"("mahasiswaId");

-- CreateIndex
CREATE UNIQUE INDEX "PertemuanAbsensi_kelasId_nomorPertemuan_mahasiswaId_key" ON "PertemuanAbsensi"("kelasId", "nomorPertemuan", "mahasiswaId");

-- AddForeignKey
ALTER TABLE "Kelas" ADD CONSTRAINT "Kelas_dosenUtamaId_fkey" FOREIGN KEY ("dosenUtamaId") REFERENCES "Dosen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kelas" ADD CONSTRAINT "Kelas_dosenPendampingId_fkey" FOREIGN KEY ("dosenPendampingId") REFERENCES "Dosen"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MahasiswaKelas" ADD CONSTRAINT "MahasiswaKelas_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "Mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MahasiswaKelas" ADD CONSTRAINT "MahasiswaKelas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PertemuanAbsensi" ADD CONSTRAINT "PertemuanAbsensi_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PertemuanAbsensi" ADD CONSTRAINT "PertemuanAbsensi_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "Mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
