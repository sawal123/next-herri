import Image from "next/image";
import Link from "next/link";
import './style/index.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-10 body">
    
      <div className="grid grid-cols-1 text-center my-auto border  lg:p-10 px-4 py-10 rounded-md bg-white  ">
        <h1 className="text-5xl font-black">GIFT AWAY</h1>
        <p className="text-center">Edisi Kedua 2023 - 2024</p>
        <div className="">
          <p className="my-5">
            Dapatkan hadiah menarik! Buruan ikuti Gift away edisi kedua.
          </p>
          <Link className="bg-blue-700 text-white  px-3 py-4 rounded-lg" href='/daftar'>Daftar Sekarang</Link>
        </div>
      </div>
    </main>
  );
}
