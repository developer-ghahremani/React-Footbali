import {
  Football,
  Home,
  Leagues,
  Match,
  Matches,
  News,
  Profile,
} from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.matches, element: <Matches /> },
  { path: pageNames.news, element: <News /> },
  { path: pageNames.football, element: <Football /> },
  { path: pageNames.leagues, element: <Leagues /> },
  { path: pageNames.profile, element: <Profile /> },
  { path: pageNames.match, element: <Match /> },
];

export default routes;
