import Footer from "./Footer";
import React from "react";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="md:mx-auto md:max-w-2xl md:w-full flex-1 mx-4 overflow-auto">
        {props.children}
      </div>
      <Footer />
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
