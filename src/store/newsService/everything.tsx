import NewsModel from "~/models/News.model";
import newsService from "./";

const everythingNews = newsService.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<{ articles: NewsModel[] }, { pageSize: number }>({
      query: ({ pageSize }) => ({
        url: "/everything",
        params: {
          apiKey: "03c6dc7bfbdd45ac8eab98aa84580a4c",
          q: "football",
          page: 1,
          pageSize,
          sortBy: "publishedAt",
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = everythingNews;
