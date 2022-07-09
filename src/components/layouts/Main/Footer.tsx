import { useLocation, useNavigate } from "react-router-dom";

import { menuItems } from "~/constant";

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChangePage = (to: string) => {
    navigate({ pathname: to });
  };

  // return (
  //   <div className="md:hidden flex justify-between w-full py-3 border-t fixed bottom-0">
  //     {options.map((option) => (
  //       <div
  //         key={option.path}
  //         className="flex flex-col items-center flex-1 cursor-pointer"
  //         onClick={() => handleChangePage(option.path)}>
  //         <img
  //           src={pathname === option.path ? option.selectedIcon : option.icon}
  //           alt=""
  //           className="w-8 h-8"
  //         />
  //         <p
  //           className={`text-xs ${
  //             option.path === pathname ? "text-green-900 font-bold" : ""
  //           }`}>
  //           {option.title}
  //         </p>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div className="md:hidden flex justify-between w-full py-3 border-t">
      {menuItems.map((option) => (
        <div
          key={option.path}
          className="flex flex-col items-center flex-1 cursor-pointer"
          onClick={() => handleChangePage(option.path)}>
          <img
            src={pathname === option.path ? option.selectedIcon : option.icon}
            alt=""
            className="w-8 h-8"
          />
          <p
            className={`text-xs ${
              option.path === pathname ? "text-green-900 font-bold" : ""
            }`}>
            {option.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
