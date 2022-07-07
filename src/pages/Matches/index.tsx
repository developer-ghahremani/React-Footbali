import { DatePicker, Matches as MatchList } from "~/components";

import { MainLayout } from "~/components/layouts";

type Props = {};

const Matches = (props: Props) => {
  return (
    <MainLayout>
      <DatePicker />
      <MatchList />
    </MainLayout>
  );
};

export default Matches;
