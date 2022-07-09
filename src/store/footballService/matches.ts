import MatchModel from "~/models/Match.model";
import service from ".";

const match = service.injectEndpoints({
  endpoints: (build) => ({
    getMatches: build.query<
      {
        response: MatchModel[];
      },
      { date: string }
    >({
      query: (params) => ({ url: "/fixtures", params }),
    }),
  }),
});

export const { useGetMatchesQuery } = match;
