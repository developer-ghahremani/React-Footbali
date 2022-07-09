import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import NewsModel from "~/models/News.model";

const newsService = createApi({
  reducerPath: "newsService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (build) => ({}),
});

export default newsService;
