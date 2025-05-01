import { PrismaClient, Prisma } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const user: Prisma.UserCreateInput[] = [
  {
    id: "000000000",
    email: "admin@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Admin",
    nim: "000000000",
    role: "ADMIN",
  },
  {
    id: "100000001",
    email: "budi@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Budi Santoso",
    nim: "100000001",
    role: "TEACHER",
  },
  {
    id: "100000002",
    email: "meutia@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Cut Nyak Meutia",
    nim: "100000002",
    role: "TEACHER",
  },
  {
    id: "118130000",
    email: "vlad@@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Vladimir Putin",
    nim: "118130000",
    role: "STUDENT",
  },
  {
    id: "118130001",
    email: "gates@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Bill Gates",
    nim: "118130001",
    role: "STUDENT",
  },
  {
    id: "118130002",
    email: "jack@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Jack Ma",
    nim: "118130002",
    role: "STUDENT",
  },
  {
    id: "118130003",
    email: "modi@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Narendra Modi",
    nim: "118130003",
    role: "STUDENT",
  },
  {
    id: "118130004",
    email: "elon@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Elon Musk",
    nim: "118130004",
    role: "STUDENT",
  },
  {
    id: "118130005",
    email: "trump@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Donald Trump",
    nim: "118130005",
    role: "STUDENT",
  },
  {
    id: "118130006",
    email: "rifki@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Rifki Yusuf",
    nim: "118130006",
    role: "STUDENT",
  },
  {
    id: "118130007",
    email: "santoso@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Santoso Sukirno",
    nim: "118130007",
    role: "STUDENT",
  },
  {
    id: "118130008",
    email: "susi@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Susi pudjiastuti",
    nim: "118130008",
    role: "STUDENT",
  },
  {
    id: "118130009",
    email: "indah@absen.com",
    password: "12345678", // Untuk produksi, gunakan hash password
    nama: "Indah Permata",
    nim: "118130009",
    role: "STUDENT",
  },
];

const kelas: Prisma.KelasCreateInput[] = [
  {
    id: "EL2021",
    kodeKelas: "EL2021",
    namaKelas: "Etika Profesi",
    pinKelas: "1234",
    hariPertemuan: "",
    dosen: {
      connect: {
        id: "100000001",
      },
    },
    jumlahPertemuan: 16,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "EL2022",
    kodeKelas: "EL2022",
    namaKelas: "Medan Elektromagnetik",
    pinKelas: "1234",
    hariPertemuan: "",
    dosen: {
      connect: {
        id: "100000001",
      },
    },
    jumlahPertemuan: 16,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "EL2023",
    kodeKelas: "EL2023",
    namaKelas: "Elektronika",
    pinKelas: "1234",
    hariPertemuan: "",
    dosen: {
      connect: {
        id: "100000001",
      },
    },
    jumlahPertemuan: 16,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "EL2024",
    kodeKelas: "EL2024",
    namaKelas: "Manajemen Industri",
    pinKelas: "1234",
    hariPertemuan: "",
    dosen: {
      connect: {
        id: "100000001",
      },
    },
    jumlahPertemuan: 16,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const pertemuan: Prisma.PertemuanCreateInput[] = [
  {
    id: "EL2021-1",
    nomorPertemuan: 1,
    tanggalPertemuan: new Date("2025-01-01"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-2",
    nomorPertemuan: 2,
    tanggalPertemuan: new Date("2025-01-02"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-3",
    nomorPertemuan: 3,
    tanggalPertemuan: new Date("2025-01-03"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-4",
    nomorPertemuan: 4,
    tanggalPertemuan: new Date("2025-01-04"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-5",
    nomorPertemuan: 5,
    tanggalPertemuan: new Date("2025-01-05"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-6",
    nomorPertemuan: 6,
    tanggalPertemuan: new Date("2025-01-06"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-7",
    nomorPertemuan: 7,
    tanggalPertemuan: new Date("2025-01-07"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-8",
    nomorPertemuan: 8,
    tanggalPertemuan: new Date("2025-01-08"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-9",
    nomorPertemuan: 9,
    tanggalPertemuan: new Date("2025-01-09"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-10",
    nomorPertemuan: 10,
    tanggalPertemuan: new Date("2025-01-10"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-11",
    nomorPertemuan: 11,
    tanggalPertemuan: new Date("2025-01-11"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-12",
    nomorPertemuan: 12,
    tanggalPertemuan: new Date("2025-01-12"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-13",
    nomorPertemuan: 13,
    tanggalPertemuan: new Date("2025-01-13"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-14",
    nomorPertemuan: 14,
    tanggalPertemuan: new Date("2025-01-14"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-15",
    nomorPertemuan: 15,
    tanggalPertemuan: new Date("2025-01-15"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  {
    id: "EL2021-16",
    nomorPertemuan: 16,
    tanggalPertemuan: new Date("2025-01-16"),
    kelas: {
      connect: {
        id: "EL2021",
      },
    },
  },
  // Pertemuan untuk EL2022
  {
    id: "EL2022-1",
    nomorPertemuan: 1,
    tanggalPertemuan: new Date("2025-02-01"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-2",
    nomorPertemuan: 2,
    tanggalPertemuan: new Date("2025-02-02"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-3",
    nomorPertemuan: 3,
    tanggalPertemuan: new Date("2025-02-03"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-4",
    nomorPertemuan: 4,
    tanggalPertemuan: new Date("2025-02-04"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-5",
    nomorPertemuan: 5,
    tanggalPertemuan: new Date("2025-02-05"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-6",
    nomorPertemuan: 6,
    tanggalPertemuan: new Date("2025-02-06"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-7",
    nomorPertemuan: 7,
    tanggalPertemuan: new Date("2025-02-07"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-8",
    nomorPertemuan: 8,
    tanggalPertemuan: new Date("2025-02-08"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-9",
    nomorPertemuan: 9,
    tanggalPertemuan: new Date("2025-02-09"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-10",
    nomorPertemuan: 10,
    tanggalPertemuan: new Date("2025-02-10"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-11",
    nomorPertemuan: 11,
    tanggalPertemuan: new Date("2025-02-11"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-12",
    nomorPertemuan: 12,
    tanggalPertemuan: new Date("2025-02-12"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-13",
    nomorPertemuan: 13,
    tanggalPertemuan: new Date("2025-02-13"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-14",
    nomorPertemuan: 14,
    tanggalPertemuan: new Date("2025-02-14"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-15",
    nomorPertemuan: 15,
    tanggalPertemuan: new Date("2025-02-15"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },
  {
    id: "EL2022-16",
    nomorPertemuan: 16,
    tanggalPertemuan: new Date("2025-02-16"),
    kelas: {
      connect: {
        id: "EL2022",
      },
    },
  },

  // Pertemuan untuk EL2023
  {
    id: "EL2023-1",
    nomorPertemuan: 1,
    tanggalPertemuan: new Date("2025-03-01"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-2",
    nomorPertemuan: 2,
    tanggalPertemuan: new Date("2025-03-02"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-3",
    nomorPertemuan: 3,
    tanggalPertemuan: new Date("2025-03-03"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-4",
    nomorPertemuan: 4,
    tanggalPertemuan: new Date("2025-03-04"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-5",
    nomorPertemuan: 5,
    tanggalPertemuan: new Date("2025-03-05"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-6",
    nomorPertemuan: 6,
    tanggalPertemuan: new Date("2025-03-06"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-7",
    nomorPertemuan: 7,
    tanggalPertemuan: new Date("2025-03-07"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-8",
    nomorPertemuan: 8,
    tanggalPertemuan: new Date("2025-03-08"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-9",
    nomorPertemuan: 9,
    tanggalPertemuan: new Date("2025-03-09"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-10",
    nomorPertemuan: 10,
    tanggalPertemuan: new Date("2025-03-10"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-11",
    nomorPertemuan: 11,
    tanggalPertemuan: new Date("2025-03-11"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-12",
    nomorPertemuan: 12,
    tanggalPertemuan: new Date("2025-03-12"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-13",
    nomorPertemuan: 13,
    tanggalPertemuan: new Date("2025-03-13"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-14",
    nomorPertemuan: 14,
    tanggalPertemuan: new Date("2025-03-14"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-15",
    nomorPertemuan: 15,
    tanggalPertemuan: new Date("2025-03-15"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },
  {
    id: "EL2023-16",
    nomorPertemuan: 16,
    tanggalPertemuan: new Date("2025-03-16"),
    kelas: {
      connect: {
        id: "EL2023",
      },
    },
  },

  // Pertemuan untuk EL2024
  {
    id: "EL2024-1",
    nomorPertemuan: 1,
    tanggalPertemuan: new Date("2025-04-01"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-2",
    nomorPertemuan: 2,
    tanggalPertemuan: new Date("2025-04-02"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-3",
    nomorPertemuan: 3,
    tanggalPertemuan: new Date("2025-04-03"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-4",
    nomorPertemuan: 4,
    tanggalPertemuan: new Date("2025-04-04"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-5",
    nomorPertemuan: 5,
    tanggalPertemuan: new Date("2025-04-05"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-6",
    nomorPertemuan: 6,
    tanggalPertemuan: new Date("2025-04-06"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-7",
    nomorPertemuan: 7,
    tanggalPertemuan: new Date("2025-04-07"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-8",
    nomorPertemuan: 8,
    tanggalPertemuan: new Date("2025-04-08"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-9",
    nomorPertemuan: 9,
    tanggalPertemuan: new Date("2025-04-09"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-10",
    nomorPertemuan: 10,
    tanggalPertemuan: new Date("2025-04-10"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-11",
    nomorPertemuan: 11,
    tanggalPertemuan: new Date("2025-04-11"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-12",
    nomorPertemuan: 12,
    tanggalPertemuan: new Date("2025-04-12"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-13",
    nomorPertemuan: 13,
    tanggalPertemuan: new Date("2025-04-13"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-14",
    nomorPertemuan: 14,
    tanggalPertemuan: new Date("2025-04-14"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-15",
    nomorPertemuan: 15,
    tanggalPertemuan: new Date("2025-04-15"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
  {
    id: "EL2024-16",
    nomorPertemuan: 16,
    tanggalPertemuan: new Date("2025-04-16"),
    kelas: {
      connect: {
        id: "EL2024",
      },
    },
  },
];

export async function main() {
  console.log("Seeding ...");

  // Hapus semua data di tabel yang ada
  await prisma.absensi.deleteMany({});
  await prisma.pertemuan.deleteMany({});
  await prisma.kelas.deleteMany({});
  await prisma.user.deleteMany({});

  // Buat data baru
  console.log("Creating users ...");
  for (const u of user) {
    await prisma.user.create({
      data: u,
    });
  }

  console.log("Creating kelas ...");
  for (const k of kelas) {
    await prisma.kelas.create({
      data: k,
    });
  }

  console.log("Creating pertemuan ...");
  for (const p of pertemuan) {
    await prisma.pertemuan.create({
      data: p,
    });
  }

  console.log("Seeding finished.");
}

main();
