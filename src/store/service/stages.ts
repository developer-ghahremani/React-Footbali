import StageModel from "~/models/Stage.model";
import service from "./";

const stages = service.injectEndpoints({
  endpoints: (build) => ({
    getStages: build.query<
      { Stages: StageModel[] },
      { Category: string; Date: string }
    >({
      query: (params) => ({ url: "/matches/v2/list-by-date", params }),
    }),
  }),
});

export const { useGetStagesQuery } = stages;
