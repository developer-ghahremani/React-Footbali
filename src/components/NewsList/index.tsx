import { NewsItem } from "../items";
import moment from "moment";
import { useAppSelector } from "~/store";
import { useGetNewsQuery } from "~/store/newsService/everything";

type Props = { pageSize: number };
const NewsList = (props: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings.ui);
  const { isFetching, isError, data } = useGetNewsQuery({
    pageSize: props.pageSize,
  });

  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;
  return (
    <div
      className={`${
        darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
      } px-2 pt-3`}>
      <div
        className={`grid gap-4 ${
          props.pageSize > 15 ? "grid-cols-2" : "grid-cols-1"
        }`}>
        {data.articles.slice(1, data.articles.length).map((news) => (
          <NewsItem news={news} key={news.url} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
