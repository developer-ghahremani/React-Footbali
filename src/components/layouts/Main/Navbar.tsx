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
    <div className="hidden md:flex bg-white py-2">
      <div className="md:mx-auto md:max-w-4xl flex justify-between items-center w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleHomePage}>
          <img src={LOGO} className="w-16 h-16" alt="" />
          <p className="font-bold text-2xl mx-4">Football app</p>
        </div>
        <div className="relative">
          <div
            className="border rounded-xl py-1 px-2 cursor-pointer"
            onClick={toggleShowMenu}>
            <MenuIcon size={24} />
          </div>
          {showMenu && (
            <div className="bg-white w-80 p-2 shadow-2xl absolute top-8 right-0 animate__animated animate__fadeIn">
              {menuItems.map((item, index, array) => (
                <Link to={item.path}>
                  <div
                    className="flex items-center cursor-pointer mt-4"
                    key={item.title}>
                    <img
                      src={item.selectedIcon}
                      className="max-w-[32px]"
                      alt=""
                    />
                    <p className="mx-4 hover:scale-105">{item.title}</p>
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
