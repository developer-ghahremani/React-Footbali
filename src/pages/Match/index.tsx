import { MainLayout } from "~/components/layouts";
import { MatchDetail } from "~/components";
import MatchModel from "~/models/Match.model";
import { useLocation } from "react-router-dom";

const Match = () => {
  const location = useLocation();
  const match = location.state as MatchModel;

  return (
    <MainLayout>
      <MatchDetail match={match} />
    </MainLayout>
  );
};

export default Match;
