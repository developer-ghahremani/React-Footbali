import { Link, useNavigate } from "react-router-dom";
import { menuItems, pageNames } from "~/constant";
import { useAppDispatch, useAppSelector } from "~/store";

import { Close } from "~/components/icons";
import { ISwitch } from "~/components/general";
import LOGO from "~/assets/images/logo.png";
import moment from "moment";
import { toggleDarkMode } from "~/store/settings";
import { toggleSidebarModal } from "~/store/modals";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { ui } = useAppSelector((s) => s.settings);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebarModal());
  };

  const handleChangePage = (to: string) => {
    handleToggleSidebar();
    setTimeout(() => {
      navigate(to);
    }, 100);
  };

  const handleToggleDarkMode = (status: boolean) => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar animate__animated animate__fadeInLeft animate__faster">
        <div className="flex flex-col justify-between h-full px-4 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <img
                onClick={() => handleChangePage(pageNames.home)}
                src={LOGO}
                className="w-10 h-10 cursor-pointer"
                alt=""
              />
              <div
                className=" flex items-center cursor-pointer"
                onClick={handleToggleSidebar}>
                <p className="font-bold">close</p>
                <Close />
              </div>
            </div>
            <div className="mt-6">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="mb-3 cursor-pointer"
                  onClick={() => handleChangePage(item.path)}>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="md:text-base flex items-center justify-center text-xs">
              <ISwitch active={ui.darkMode} onChange={handleToggleDarkMode} />
              <p>Switch to {!ui.darkMode ? `dark` : "light"} mode</p>
            </div>
          </div>
          <p className="text-center">{moment().format("dddd, DD MMMM YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
