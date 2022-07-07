import { DatePicker, Stages } from "~/components";

import { MainLayout } from "~/components/layouts";

type Props = {};

const Matches = (props: Props) => {
  return (
    <MainLayout>
      <DatePicker />
      <Stages />
    </MainLayout>
  );
};

export default Matches;
