import { Matches, NewsList } from "~/components";

import { MainLayout } from "~/components/layouts";
import React from "react";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex gap-4">
        <div className="flex-1">
          <Matches />
        </div>
        <div className="md:block flex-1 hidden">
          <NewsList pageSize={15} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
