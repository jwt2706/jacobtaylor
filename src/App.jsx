import React, { useEffect } from "react";
import { useRoutes, useNavigate, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from "./components/Home";

function Navigation() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

   // redirect to home page if 404 because im too lazy to make a page for that
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;