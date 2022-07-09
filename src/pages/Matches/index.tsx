import { DatePicker, Matches as MatchList } from "~/components";

import { MainLayout } from "~/components/layouts";

type Props = {};

const Matches = (props: Props) => {
  return (
    <MainLayout>
      <MatchList />
    </MainLayout>
  );
};

export default Matches;
