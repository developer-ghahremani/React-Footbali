import { NewsItem } from "../items";
import moment from "moment";
import { useGetNewsQuery } from "~/store/newsService/everything";

type Props = { pageSize: number };
const NewsList = (props: Props) => {
  const { isFetching, isError, data } = useGetNewsQuery({
    pageSize: props.pageSize,
  });

  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;
  return (
    <div className="border bg-white p-4 my-4">
      {/* <p>{data.articles.length}</p> */}
      {/* <div className="flex flex-col items-center">
        <a
          href={data.articles[0].url}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={data.articles[0].urlToImage}
            className="rounded-lg max-h-[18rem]"
            alt=""
          />
        </a>
        <p className="text-lg font-bold">{data.articles[0].title}</p>
        <div className="flex w-full text-sm">
          <p>{moment(data.articles[0].publishedAt).fromNow()}</p>
        </div>
      </div> */}
      <div
        className={`grid gap-4 ${
          props.pageSize > 10 ? "grid-cols-2" : "grid-cols-1"
        }`}>
        {data.articles.slice(1, data.articles.length).map((news) => (
          <NewsItem news={news} key={news.url} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
