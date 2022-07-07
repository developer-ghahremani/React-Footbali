import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://livescore6.p.rapidapi.com",
    prepareHeaders(headers, api) {
      // 'X-RapidAPI-Key': '5a11ebc2a9msh6f0f18ae817945dp1c6124jsn07e22b390982',

      headers.append(
        "X-RapidAPI-Key",
        "5a11ebc2a9msh6f0f18ae817945dp1c6124jsn07e22b390982"
      );
      return headers;
    },
  }),

  endpoints: () => ({}),
  reducerPath: "service",
});

export default service;
