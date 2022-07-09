import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "~/constant";

const Footer2 = () => {
  return (
    <div className="hidden md:flex flex-col bg-white py-12">
      <div className="md:mx-auto md:max-w-4xl w-full flex items-center">
        <div className="flex-1">
          <p className="text-xl font-bold">Football is the Best</p>
        </div>
        <div className="flex-1 flex flex-col">
          {menuItems.map((item) => (
            <Link to={item.path}>
              <div key={item.title} className="flex items-center mb-3">
                <img src={item.selectedIcon} className="w-6 h-6" alt="" />
                <p className="mx-2 text-md font-black">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
