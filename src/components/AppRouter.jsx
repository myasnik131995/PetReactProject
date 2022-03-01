import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../contex";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.element}
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.element}
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
          />
      ))}
    </Routes>
  );
};

export default AppRouter;
