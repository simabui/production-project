import { useTheme } from "app/providers/themeProvider/index";
import { Suspense, useEffect } from "react";

import { userActions } from "entities/User";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/Navbar/index";
import PageLoader from "widgets/PageLoader/PageLoader";
import { SideBar } from "widgets/Sidebar/index";
import { useAppDispatch } from "./providers/StoreProvider/hooks/useAppDispatch";
import { AppRouter } from "./providers/themeProvider/router";
import "./styles/index.scss";

export default function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
