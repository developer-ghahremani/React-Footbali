import { dateFormat } from "../../constant/index";
import moment from "moment";
import service from "./";

const fixtures = service.injectEndpoints({
  endpoints: (build) => ({
    getMatches: build.query<[], { currentDate?: string }>({
      query: ({ currentDate }) => ({
        url: "",
        params: {
          action: "get_events",
          APIkey:
            "a30d62ee4170954709b92981ee74c49ec778f51c2c3c308eeb2505d98fdaba58",
          from: currentDate || moment().format(dateFormat),
          to: currentDate || moment().format(dateFormat),
        },
      }),
    }),
  }),
});

export default fixtures;
export const { useGetMatchesQuery } = fixtures;
