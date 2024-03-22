import React, { useEffect } from "react";
import { useRoutes, useNavigate, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from "./components/Home";

function Navigation() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  // define routes using useRoutes
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" replace /> }, // Redirect to home page
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