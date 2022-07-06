import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://apiv3.apifootball.com/" }),
  endpoints: () => ({}),
  reducerPath: "service",
});

export default service;
