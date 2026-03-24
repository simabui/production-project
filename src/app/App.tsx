import { useTheme } from "app/providers/themeProvider/index";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/Navbar/index";
import PageLoader from "widgets/PageLoader/PageLoader";
import { SideBar } from "widgets/Sidebar/index";
import { AppRouter } from "./providers/themeProvider/router";
import "./styles/index.scss";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
