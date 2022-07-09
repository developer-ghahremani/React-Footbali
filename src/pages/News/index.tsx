import { MainLayout } from "~/components/layouts";
import { NewsList } from "~/components";

const News = () => {
  return (
    <MainLayout>
      <NewsList pageSize={50} />
    </MainLayout>
  );
};

export default News;
