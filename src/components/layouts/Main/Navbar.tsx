import { useAppDispatch, useAppSelector } from "~/store";

import LOGO from "~/assets/images/logo.png";
import { MenuIcon } from "~/components/icons";
import { toggleSidebarModal } from "~/store/modals";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((s) => s.settings.ui);

  const toggleShowSidebar = () => {
    dispatch(toggleSidebarModal());
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div
      className={`md:flex ${
        darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
      } py-2`}>
      <div className="md:mx-auto md:max-w-4xl md:w-full flex items-center justify-between mx-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleHomePage}>
          <div className="md:hidden cursor-pointer" onClick={toggleShowSidebar}>
            <MenuIcon size={24} />
          </div>
          <img src={LOGO} className=" w-16 h-16 mx-2" alt="" />
          <p className="text-2xl font-bold">Football app</p>
        </div>
        <div className="md:block relative hidden">
          <div
            className="rounded-xl cursor-pointer"
            onClick={toggleShowSidebar}>
            <MenuIcon size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
