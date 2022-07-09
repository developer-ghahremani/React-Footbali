import Explore from "~/assets/images/explore.png";
import ExploreSelected from "~/assets/images/explore_selected.png";
import Field from "~/assets/images/field.png";
import FieldSelected from "~/assets/images/field_selected.png";
import Football from "~/assets/images/football.png";
import FootballSelected from "~/assets/images/football_selected.png";
import Trophy from "~/assets/images/trophy.png";
import TrophySelected from "~/assets/images/trophy_selected.png";
import User from "~/assets/images/user.png";
import UserSelected from "~/assets/images/user_selected.png";
import { pageNames } from "~/constant";

const menuItems: {
  title: string;
  selectedIcon: string;
  icon: string;
  path: string;
}[] = [
  {
    icon: Field,
    selectedIcon: FieldSelected,
    title: "fixtures",
    path: pageNames.matches,
  },
  {
    icon: Explore,
    selectedIcon: ExploreSelected,
    title: "explore",
    path: pageNames.explore,
  },
  {
    icon: Football,
    selectedIcon: FootballSelected,
    title: "football",
    path: pageNames.football,
  },
  {
    icon: Trophy,
    selectedIcon: TrophySelected,
    title: "trophy",
    path: pageNames.leagues,
  },
  {
    icon: User,
    selectedIcon: UserSelected,
    title: "user",
    path: pageNames.profile,
  },
];

export default menuItems;
