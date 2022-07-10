import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "~/constant";
import { useAppSelector } from "~/store";

const Footer2 = () => {
  const { darkMode } = useAppSelector((s) => s.settings.ui);
  return (
    <div
      className={`md:flex ${
        darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
      } flex-col hidden py-12 mt-4`}>
      <div className="md:mx-auto md:max-w-4xl flex items-center w-full">
        <div className="flex-1">
          <p className="text-xl font-bold">Football is the Best</p>
        </div>
        <div className="flex flex-col flex-1">
          {menuItems.map((item) => (
            <Link to={item.path}>
              <div key={item.title} className="flex items-center mb-3">
                <img src={item.selectedIcon} className="w-6 h-6" alt="" />
                <p className="text-md mx-2 font-black">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
