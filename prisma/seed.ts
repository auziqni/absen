import { PrismaClient, Prisma, StatusKehadiran } from "@/app/generated/prisma";
// import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Fungsi untuk hash password
const hashPassword = async (password: string) => {
  // const salt = await bcrypt.genSalt(10);
  return password;
};

// Fungsi untuk membuat data Admin
async function seedAdmin() {
  console.log("Creating admin...");

  const admin = {
    id: "000000000",
    email: "admin@absen.com",
    password: await hashPassword("12345678"),
    nama: "Admin",
  };

  await prisma.admin.create({
    data: admin,
  });
}

// Fungsi untuk membuat data Dosen
async function seedDosen() {
  console.log("Creating dosen...");

  const dosen = [
    {
      id: "100000001",
      email: "budi@absen.com",
      password: await hashPassword("12345678"),
      nama: "Budi Santoso",
      nip: "100000001",
    },
    {
      id: "100000002",
      email: "meutia@absen.com",
      password: await hashPassword("12345678"),
      nama: "Cut Nyak Meutia",
      nip: "100000002",
    },
  ];

  for (const d of dosen) {
    await prisma.dosen.create({
      data: d,
    });
  }
}

// Tipe untuk data mahasiswa
type MahasiswaData = {
  id: string;
  email: string;
  password: string;
  nama: string;
  nim: string;
};

// Fungsi untuk membuat data Mahasiswa
async function seedMahasiswa(): Promise<MahasiswaData[]> {
  console.log("Creating mahasiswa...");

  const mahasiswa: MahasiswaData[] = [
    {
      id: "118130000",
      email: "vlad@absen.com", // Fixed double @ in email
      password: await hashPassword("12345678"),
      nama: "Vladimir Putin",
      nim: "118130000",
    },
    {
      id: "118130001",
      email: "gates@absen.com",
      password: await hashPassword("12345678"),
      nama: "Bill Gates",
      nim: "118130001",
    },
    {
      id: "118130002",
      email: "jack@absen.com",
      password: await hashPassword("12345678"),
      nama: "Jack Ma",
      nim: "118130002",
    },
    {
      id: "118130003",
      email: "modi@absen.com",
      password: await hashPassword("12345678"),
      nama: "Narendra Modi",
      nim: "118130003",
    },
    {
      id: "118130004",
      email: "elon@absen.com",
      password: await hashPassword("12345678"),
      nama: "Elon Musk",
      nim: "118130004",
    },
    {
      id: "118130005",
      email: "trump@absen.com",
      password: await hashPassword("12345678"),
      nama: "Donald Trump",
      nim: "118130005",
    },
    {
      id: "118130006",
      email: "rifki@absen.com",
      password: await hashPassword("12345678"),
      nama: "Rifki Yusuf",
      nim: "118130006",
    },
    {
      id: "118130007",
      email: "santoso@absen.com",
      password: await hashPassword("12345678"),
      nama: "Santoso Sukirno",
      nim: "118130007",
    },
    {
      id: "118130008",
      email: "susi@absen.com",
      password: await hashPassword("12345678"),
      nama: "Susi pudjiastuti",
      nim: "118130008",
    },
    {
      id: "118130009",
      email: "indah@absen.com",
      password: await hashPassword("12345678"),
      nama: "Indah Permata",
      nim: "118130009",
    },
  ];

  for (const m of mahasiswa) {
    await prisma.mahasiswa.create({
      data: m,
    });
  }

  return mahasiswa;
}

// Fungsi untuk membuat data Kelas
async function seedKelas() {
  console.log("Creating kelas...");

  const kelas = [
    {
      id: "EL2021",
      kodeKelas: "EL2021",
      namaKelas: "Etika Profesi",
      deskripsi: "Mata kuliah yang membahas etika dalam dunia profesional",
      pinKelas: "1234",
      hariPertemuan: "Senin",
      jumlahPertemuan: 16,
      statusAktif: true,
      dosenUtamaId: "100000001",
      dosenPendampingId: "100000002",
    },
    {
      id: "EL2022",
      kodeKelas: "EL2022",
      namaKelas: "Medan Elektromagnetik",
      deskripsi:
        "Mata kuliah tentang konsep dan aplikasi medan elektromagnetik",
      pinKelas: "1234",
      hariPertemuan: "Selasa",
      jumlahPertemuan: 16,
      statusAktif: true,
      dosenUtamaId: "100000001",
      dosenPendampingId: null,
    },
    {
      id: "EL2023",
      kodeKelas: "EL2023",
      namaKelas: "Elektronika",
      deskripsi: "Mata kuliah dasar tentang elektronika analog dan digital",
      pinKelas: "1234",
      hariPertemuan: "Rabu",
      jumlahPertemuan: 16,
      statusAktif: true,
      dosenUtamaId: "100000001",
      dosenPendampingId: "100000002",
    },
    {
      id: "EL2024",
      kodeKelas: "EL2024",
      namaKelas: "Manajemen Industri",
      deskripsi: "Mata kuliah tentang manajemen dalam industri teknologi",
      pinKelas: "1234",
      hariPertemuan: "Kamis",
      jumlahPertemuan: 16,
      statusAktif: true,
      dosenUtamaId: "100000001",
      dosenPendampingId: null,
    },
    {
      id: "EL2025",
      kodeKelas: "EL2025",
      namaKelas: "Seminar Umum Teknik",
      deskripsi: "Mata kuliah wajib untuk semua mahasiswa teknik elektro",
      pinKelas: "2525",
      hariPertemuan: "Jumat",
      jumlahPertemuan: 16,
      statusAktif: true,
      dosenUtamaId: "100000001",
      dosenPendampingId: "100000002",
    },
  ];

  for (const k of kelas) {
    await prisma.kelas.create({
      data: k,
    });
  }

  return kelas;
}

// Fungsi untuk membuat data MahasiswaKelas (mendaftarkan mahasiswa ke kelas)
async function seedMahasiswaKelas(
  mahasiswaList: MahasiswaData[]
): Promise<void> {
  console.log("Registering mahasiswa to kelas...");

  const regulerKelasIds = ["EL2021", "EL2022", "EL2023", "EL2024"];
  const wajibKelasId = "EL2025"; // Kelas kelima yang wajib untuk semua mahasiswa

  for (const mahasiswa of mahasiswaList) {
    // Mendaftarkan semua mahasiswa ke kelas wajib (EL2025)
    await prisma.mahasiswaKelas.create({
      data: {
        mahasiswaId: mahasiswa.id,
        kelasId: wajibKelasId,
        tanggalGabung: new Date(),
        statusAktif: true,
      },
    });

    // Setiap mahasiswa juga didaftarkan ke 2 kelas reguler secara random
    const randomKelas = getRandomItems(regulerKelasIds, 2);

    for (const kelasId of randomKelas) {
      await prisma.mahasiswaKelas.create({
        data: {
          mahasiswaId: mahasiswa.id,
          kelasId: kelasId,
          tanggalGabung: new Date(),
          statusAktif: true,
        },
      });
    }
  }
}

// Fungsi untuk membuat data PertemuanAbsensi
async function seedPertemuanAbsensi(): Promise<void> {
  console.log("Creating pertemuan and absensi data...");

  // Ambil semua mahasiswa dan kelas
  const mahasiswas = await prisma.mahasiswa.findMany();
  const kelasMahasiswa = await prisma.mahasiswaKelas.findMany({
    include: {
      kelas: true,
      mahasiswa: true,
    },
  });

  // Tipe untuk pengelompokan mahasiswa berdasarkan kelas
  type MahasiswaByKelasType = {
    [kelasId: string]: Array<{
      id: string;
      nim?: string;
      nama: string;
      email: string;
      password: string;
      noHP?: string | null;
      alamat?: string | null;
      createdAt: Date;
      updatedAt: Date;
    }>;
  };

  // Kelompokkan mahasiswa berdasarkan kelas
  const mahasiswaByKelas: MahasiswaByKelasType = {};
  for (const km of kelasMahasiswa) {
    if (!mahasiswaByKelas[km.kelasId]) {
      mahasiswaByKelas[km.kelasId] = [];
    }
    mahasiswaByKelas[km.kelasId].push(km.mahasiswa);
  }

  // Mapping bulan berdasarkan kelas (seperti pada data asli)
  const kelasMonthMap: Record<string, number> = {
    EL2021: 1, // Januari
    EL2022: 2, // Februari
    EL2023: 3, // Maret
    EL2024: 4, // April
    EL2025: 5, // Mei - untuk kelas kelima
  };

  // Buat pertemuan dan absensi untuk setiap kelas
  for (const kelasId of Object.keys(mahasiswaByKelas)) {
    const mahasiswaList = mahasiswaByKelas[kelasId];
    const month: number = kelasMonthMap[kelasId] || 1;

    // Buat 16 pertemuan untuk kelas ini (seperti data asli)
    for (let i = 1; i <= 16; i++) {
      // Buat tanggal pertemuan berdasarkan pola data asli
      const tanggalPertemuan = new Date(
        `2025-${month.toString().padStart(2, "0")}-${i
          .toString()
          .padStart(2, "0")}`
      );

      // Untuk setiap mahasiswa yang terdaftar di kelas, buat record absensi
      for (const mahasiswa of mahasiswaList) {
        // Status kehadiran default NONE
        const statusKehadiran = "NONE";

        // Buat record PertemuanAbsensi
        await prisma.pertemuanAbsensi.create({
          data: {
            nomorPertemuan: i,
            tanggalPertemuan: tanggalPertemuan,
            topik: `Pertemuan ${i} - ${kelasId}`,
            statusKehadiran: statusKehadiran as StatusKehadiran,
            kelasId: kelasId,
            mahasiswaId: mahasiswa.id,
          },
        });
      }
    }
  }
}

// Helper function untuk mengambil item random dari array
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export async function main(): Promise<void> {
  console.log("Seeding database...");

  try {
    // Hapus semua data yang ada terlebih dahulu (terbalik dari urutan relasi)
    console.log("Cleaning database...");
    await prisma.pertemuanAbsensi.deleteMany({});
    await prisma.mahasiswaKelas.deleteMany({});
    await prisma.kelas.deleteMany({});
    await prisma.mahasiswa.deleteMany({});
    await prisma.dosen.deleteMany({});
    await prisma.admin.deleteMany({});

    // Seed data
    await seedAdmin();
    await seedDosen();
    const mahasiswaList = await seedMahasiswa();
    await seedKelas();
    await seedMahasiswaKelas(mahasiswaList);
    await seedPertemuanAbsensi();

    console.log("Seeding finished successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Jalankan fungsi main
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
