import Footer from "./Footer";
import Footer2 from "./Footer2";
import Navbar from "./Navbar";
import React from "react";
import SideBar from "./SideBar";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  // return (
  //   <div className="relative">
  //     <div className="md:mx-auto md:max-w-2xl md:w-full mx-4 overflow-auto h-[calc(100vh-75px)] md:h-auto">
  //       {props.children}
  //     </div>
  //     <Footer />
  //   </div>
  // );
  return (
    <div className="relative w-full h-screen">
      <div className="md:h-auto absolute flex flex-col w-full h-screen">
        <Navbar />
        <div className="md:mx-auto md:max-w-4xl md:w-full md:min-h-screen md:mb-0 flex-1 mx-4 mb-20 overflow-auto">
          {props.children}
        </div>
        <Footer />
        <Footer2 />
      </div>
      {/* <SideBar /> */}
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
