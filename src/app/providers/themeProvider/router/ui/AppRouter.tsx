import { JSX, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";

export default function AppRouter() {
  const routes: JSX.Element[] = Object.values(routeConfig).map(({ path, element }) => <Route key={path} path={path} element={element} />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>{routes}</Routes>
      </div>
    </Suspense>
  );
}
