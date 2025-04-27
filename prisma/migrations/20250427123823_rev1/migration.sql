/*
  Warnings:

  - You are about to drop the column `jamMulai` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `jamSelesai` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `ruangan` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `semester` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `tahunAjaran` on the `Kelas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kelas" DROP COLUMN "jamMulai",
DROP COLUMN "jamSelesai",
DROP COLUMN "ruangan",
DROP COLUMN "semester",
DROP COLUMN "tahunAjaran";
