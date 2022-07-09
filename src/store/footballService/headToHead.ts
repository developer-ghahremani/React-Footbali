import MatchModel from "~/models/Match.model";
import service from "./";

const headToHead = service.injectEndpoints({
  endpoints: (build) => ({
    getHeadToHead: build.query<{ response: MatchModel[] }, { h2h: string }>({
      query: (params) => ({ url: "/fixtures/headtohead", params }),
    }),
  }),
});

export const { useGetHeadToHeadQuery } = headToHead;
