import { useEffect, FC } from "react";
import { useRoutes, useNavigate, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const Navigation: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  // 404s redirect to the home page because im too lazy to make a page for that
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}

const App: FC = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;