import Footer from "./Footer";
import Footer2 from "./Footer2";
import Navbar from "./Navbar";
import React from "react";
import SideBar from "./SideBar";
import { useAppSelector } from "~/store";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  const { sidebar } = useAppSelector((s) => s.modals);
  const { darkMode } = useAppSelector((s) => s.settings.ui);

  return (
    <div className="relative w-full h-screen">
      <div
        className={`main ${
          darkMode
            ? "bg-darkMode-primary text-white"
            : "bg-lightMode-primary text-darkMode-primary"
        } `}>
        <Navbar />
        <div className="main__section">{props.children}</div>
        <Footer />
        <Footer2 />
      </div>
      {sidebar.show && <SideBar />}
    </div>
  );

  return (
    <div className="relative h-screen bg-red-600">
      <div className="max-h-full min-h-full overflow-auto bg-green-500">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
