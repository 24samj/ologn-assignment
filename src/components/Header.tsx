import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <nav className="flex w-full items-center justify-end gap-4 p-4">
      <a
        href="#"
        className="text-primary hidden text-sm hover:underline md:block"
      >
        Gmail
      </a>
      <a
        href="#"
        className="text-primary hidden text-sm hover:underline md:block"
      >
        Images
      </a>
      <CgMenuGridO
        color="gray"
        size={38}
        className="cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-slate-200"
      />
      <RxAvatar
        color="gray"
        size={38}
        className="cursor-pointer rounded-full p-1 transition-all duration-300 ease-in-out hover:bg-slate-200"
      />
    </nav>
  );
}

export default Header;
