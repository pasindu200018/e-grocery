import { useState } from "react";
import logo from "../assets/grocery-logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import { LuUser2 } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full bg-white bg-opacity-35">
      <div className="max-w-7xl mx-auto justify-between flex p-5">
        <img src={logo} className="h-5" />

        <div className=" gap-5 items-center hidden sm:flex">
          <RiShoppingCartLine size={20} />
          <div className="flex gap-2 items-center">
            <LuUser2 size={20} />
            <p className="font-semibold">Imalka Gayani</p>
          </div>
        </div>
        <div className="sm:hidden hover:text-primary transition-all">
          <button onClick={() => setOpen(!open)}>
            {open ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>
      <div className={`justify-center grid overflow-hidden transition-all duration-100 text-center  gap-3 ${open ? "h-40" : "h-0"}`}>
        <div className="flex gap-2 justify-center items-center hover:text-primary transition-all">
          <LuUser2 size={20} />
          <p className="font-semibold">Imalka Gayani</p>
        </div>
        <div className="flex gap-2 justify-center items-center hover:text-primary transition-all">
          <RiShoppingCartLine size={20} />
          <p className="font-semibold">Cart</p>
        </div>
        <div className="flex gap-2 mb-5 justify-center items-center hover:text-primary transition-all">
          <FiLogOut size={20} />
          <p className="font-semibold">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
