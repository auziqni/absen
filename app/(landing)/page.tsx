import Image from "next/image";
import { Gauge, Shapes } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div id="hero" className="relative w-screen h-screen bg-white ">
        <div className="relative h-5/6 bg-[#000D20] ">
          <Image
            src="/logoface.png"
            alt="hero"
            objectFit="contain"
            width={400}
            height={400}
            priority
            className="absolute -translate-y-1/2 top-1/2 right-20"
          />
          <div className="absolute ml-20 top-1/3 ">
            <h1 className="text-6xl font-bold text-white ">FACE</h1>
            <p className="text-2xl font-semibold text-white">
              Face Authentication for Class Entry
            </p>
          </div>
        </div>
      </div>

      <div id="layanan" className="flex flex-col items-center gap-10 ">
        <h2 className=" font-bold text-4xl text-[#37517E] ">Layanan</h2>
        <p className="max-w-3xl text-center">
          Layanan website FACE memanfaatkan teknologi canggih seperti sensor,
          dan absensi mahasiswa secara real time dan rekomendasi yang dapat
          ditindak lanjuti bagi dosen dalam memantau mahasiswa dalam absensi,
          mengurangi manipulasi data absensi. Layanan ini membantu dosen untuk
          meningkatkan efisiensi waktu dalam absensi dengan biaya yang optimal.
        </p>
        <div className="flex gap-5 ">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[244px] h-[330px] flex flex-col gap-8 items-center">
            <Gauge className="w-24 h-24 mr-3" />
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-xl text-center font-semibold text-[#37517E]">
                Mahasiswa
              </h3>
              <p className="text-center ">
                Mahasiswa melakukan absensi pada waktu yang di tetapkan
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 w-[244px] h-[330px] flex flex-col gap-8 items-center">
            <Shapes className="w-24 h-24 mr-3" />
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-xl text-center font-semibold text-[#37517E]">
                kehadiran
              </h3>
              <p className="text-center ">
                kehadiran mahasiwa dicatat secara realtime
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 w-[244px] h-[330px] flex flex-col gap-8 items-center">
            <Shapes className="w-24 h-24 mr-3" />
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-xl text-center font-semibold text-[#37517E]">
                Data Daftar Hadir
              </h3>
              <p className="text-center ">
                Data Daftar Mahasiswa meliputi nama, NIM, kelas serta waktu
                absen akan di tampilkan pada website
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="tentang"
        className="relative flex justify-center w-full gap-10 my-20 "
      >
        <div className=" w-2/5 h-[503px] relative">
          <Image
            src={`https://tp.auziqni.com/aafo/landing/about.png`}
            alt="Next.js logo"
            fill
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>
        <div className=" w-2/5 h-[503px] my-10 ">
          <h2 className="font-bold text-4xl mb-5 text-[#37517E]">
            TENTANG KAMI
          </h2>
          <p className="text-justify ">
            Face Authentication for Class Entry (FACE) merupakan sebuah alat
            bantu yang dirancang untuk membantu kampus dalam mendata kehadiran
            Mahasiswa pada mata kuliah secara real time, sehingga mengurangi
            adanya manipulasi data kehadiran.
          </p>
          <p className="text-justify ">
            Website ini membantu mendata kehadiran Mahasiswa secara akurat dan
            real time
          </p>
          <div className="grid grid-cols-2 px-10 mt-10">
            <div className="col-span-1">
              <h3 className="font-bold">Tim</h3>
              <p className="hover:text-yellow-600">Ichwanul Azyrofi</p>
              <p className="hover:text-yellow-600">Muhammad Adi Kurniawan</p>
              <p className="hover:text-yellow-600">M. Aufa Al Rasyid N</p>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold">alamat</h3>
              <p>
                Alamat Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten
                Lampung Selatan, Lampung 35365
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// function CardLayanan({ url, title, description, icon }: CardLayananProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 w-[244px] h-[330px] flex flex-col gap-8 items-center">
//       {/* <Image src={url} alt={title} width={120} height={120} /> */}
//       <icon className={cn("h-5 w-5 mr-3", route.color)} />
//       <div className="flex flex-col items-center gap-1">
//         <h3 className="text-xl font-semibold text-center">{title}</h3>
//         <p className="text-center ">{description}</p>
//       </div>
//     </div>
//   );
// }
