import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { classNames } from "./helpers/classNames/classNames";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageASync from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageASync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
