import Link from "next/link";
import React from "react";

function link({ link, text, css,color }: any) {
  return (
    <Link 
      className={`${color} hover:bg-blue-300 transition-all duration-300  text-white px-3  py-3  rounded-lg ${css}`}
      href={link}
    >
      {text}
    </Link>
  );
}

export default link;
