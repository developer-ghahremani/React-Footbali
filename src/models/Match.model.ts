interface Match {
  Eid: string;
  Pids: Pids;
  Sids: Sids;
  Tr1: string;
  Tr2: string;
  Trh1: string;
  Trh2: string;
  Tr1OR: string;
  Tr2OR: string;
  T1: T1[];
  T2: T2[];
  Eps: "FT" | "NS";
  Esid: number;
  Epr: number;
  Ecov: number;
  Ern: number;
  ErnInf: string;
  Ewt: number;
  Et: number;
  Esd: number;
  LuUT: any;
  Eds: any;
  Edf: any;
  Eact: number;
  IncsX: number;
  ComX: number;
  LuX: number;
  StatX: number;
  SubsX: number;
  SDFowX: number;
  SDInnX: number;
  EO: number;
  LuC: number;
  Ehid: number;
  Stg: Stg;
  Pid: number;
  Spid: number;
  seriesInfo: SeriesInfo;
  Awt?: number;
  Trp1: string;
  Trp2: string;
}

interface Pids {
  8: string;
  1: string;
  12: string;
  6: string;
  28: string;
}

interface Sids {
  8: string;
  1: string;
  12: string;
  6: string;
  28: string;
}

interface Pids2 {
  1: string[];
  6: string[];
  8: string[];
  12: string[];
  28: string[];
  15: string[];
}

interface T1 {
  Nm: string;
  ID: string;
  tbd: number;
  Img: string;
  Gd: number;
  Pids: Pids2;
  CoNm: string;
  CoId: string;
  HasVideo: boolean;
}

interface Pids3 {
  1: string[];
  6: string[];
  8: string[];
  12: string[];
  28: string[];
  15: string[];
}

interface T2 {
  Nm: string;
  ID: string;
  tbd: number;
  Img: string;
  Gd: number;
  Pids: Pids3;
  CoNm: string;
  CoId: string;
  HasVideo: boolean;
  NewsTag: string;
}

interface Stg {
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
  CompST: string;
}

interface SeriesInfo {
  totalLegs: number;
  currentLeg: number;
  aggScoreTeam1: number;
  aggScoreTeam2: number;
}
export default Match;
