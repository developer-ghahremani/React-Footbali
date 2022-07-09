import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v3.football.api-sports.io/",
    prepareHeaders: (headers) => {
      headers.append("x-rapidapi-key", "e2c0463eed57071789aa63873d60fd48");
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: "service",
});

export default service;
