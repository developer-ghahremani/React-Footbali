import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { menuItems, pageNames } from "~/constant";

import LOGO from "~/assets/images/logo.png";
import { MenuIcon } from "~/components/icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleShowMenu = () => {
    setShowMenu((s) => !s);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="md:flex hidden py-2 bg-white">
      <div className="md:mx-auto md:max-w-4xl flex items-center justify-between w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleHomePage}>
          <img src={LOGO} className="w-16 h-16" alt="" />
          <p className="mx-4 text-2xl font-bold">Football app</p>
        </div>
        <div className="relative">
          <div
            className="rounded-xl px-2 py-1 border cursor-pointer"
            onClick={toggleShowMenu}>
            <MenuIcon size={24} />
          </div>
          {showMenu && (
            <div className="w-80 top-8 animate__animated animate__fadeIn absolute right-0 p-2 bg-white shadow-2xl">
              {menuItems.map((item, index, array) => (
                <Link to={item.path}>
                  <div
                    className="flex items-center mt-4 cursor-pointer"
                    key={item.title}>
                    <img
                      src={item.selectedIcon}
                      className="max-w-[32px]"
                      alt=""
                    />
                    <p className="hover:scale-105 mx-4">{item.title}</p>
                  </div>
                  {index !== array.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-200 mt-1"></div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
