import NewsModel from "~/models/News.model";
import React from "react";
import moment from "moment";

type Props = { news: NewsModel };

const NewsItem = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex w-full gap-2">
        <div className="flex-[0.5]">
          <img src={props.news.urlToImage} className="rounded-lg" alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <a href={props.news.url} target="_blank" rel="noopener noreferrer">
            <p className="text-xs font-bold">{props.news.title}</p>
          </a>
          <p className="text-xs">{moment(props.news.publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
