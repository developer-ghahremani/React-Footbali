import Footer from "./Footer";
import Footer2 from "./Footer2";
import Navbar from "./Navbar";
import React from "react";

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
    <div className="flex flex-col h-screen md:h-auto">
      <Navbar />
      <div className="md:mx-auto md:max-w-4xl flex-1 mx-4 overflow-auto md:w-full md:min-h-screen">
        {props.children}
      </div>
      <Footer />
      <Footer2 />
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
