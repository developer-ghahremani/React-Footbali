import { MainLayout } from "~/components/layouts";
import React from "react";

const Home = () => {
  return (
    <MainLayout>
      <div className="h-52 w-8 bg-teal-600"></div>
      <div className="h-52 w-8 bg-red-600"></div>
      <div className="h-52 w-8 bg-red-400"></div>
      <div className="h-52 w-8 bg-blue-600"></div>
      <div className="h-52 flex flex-col justify-between w-8 bg-red-600">
        <p>salam1</p>
        <p>salam2</p>
        <p>salam3</p>
      </div>
    </MainLayout>
  );
};

export default Home;
