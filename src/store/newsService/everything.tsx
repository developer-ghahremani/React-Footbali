import NewsModel from "~/models/News.model";
import newsService from "./";

const everythingNews = newsService.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<{ articles: NewsModel[] }, { pageSize: number }>({
      query: ({ pageSize }) => ({
        url: "/everything",
        params: {
          apiKey: "e1e4e65a647f44d48d96ea0ea3d83ef4",
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
