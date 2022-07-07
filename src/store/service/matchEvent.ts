import MatchEvent from "~/models/MatchEvent.model";
import service from "./";
import { useParams } from "react-router-dom";

const matchEvent = service.injectEndpoints({
  endpoints: (build) => ({
    getMatchEvent: build.query<
      { response: MatchEvent[] },
      { fixtureId: number }
    >({
      query: (params) => ({
        url: "/fixtures/events",
        params: { fixture: params.fixtureId },
      }),
    }),
  }),
});

export const { useGetMatchEventQuery } = matchEvent;
