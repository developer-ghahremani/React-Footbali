import { useLocation, useNavigate } from "react-router-dom";

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

const options: {
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

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChangePage = (to: string) => {
    navigate({ pathname: to });
  };

  return (
    <div className="md:hidden flex justify-between w-full py-3 border-t">
      {options.map((option) => (
        <div
          key={option.path}
          className="flex flex-col items-center flex-1 cursor-pointer"
          onClick={() => handleChangePage(option.path)}>
          <img
            src={pathname === option.path ? option.selectedIcon : option.icon}
            alt=""
            className="w-8 h-8"
          />
          <p
            className={`text-xs ${
              option.path === pathname ? "text-green-900 font-bold" : ""
            }`}>
            {option.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
