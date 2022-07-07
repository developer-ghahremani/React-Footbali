import Match from "./Match.model";

interface StageModel {
  Sid: string;
  Snm: string;
  Sds: string;
  Scd: string;
  Cid: string;
  Cnm: string;
  Csnm: string;
  Ccd: string;
  Ccdiso: string;
  CompId: string;
  CompN: string;
  CompD: string;
  Scu: number;
  Chi: number;
  Shi: number;
  Sdn: string;
  Events: Match[];
  CompST: string;
}
export default StageModel;
