import { Explore, Football, Home, Leagues, Matches, Profile } from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  // { path: pageNames.home, element: <Home /> },
  { path: pageNames.matches, element: <Matches /> },
  { path: pageNames.explore, element: <Explore /> },
  { path: pageNames.football, element: <Football /> },
  { path: pageNames.leagues, element: <Leagues /> },
  { path: pageNames.profile, element: <Profile /> },
];

export default routes;
