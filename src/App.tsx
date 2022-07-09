import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import { pageNames } from "./constant";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}

        {/* <Route path="/" element={<Navigate to={pageNames.matches} replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
