import {Route} from "react-router";

import HomePage from "../components/pages/index";
import BlogPage from "../components/pages/blog";
import AdminPage from "../components/pages/admin/index";
import AdminLoginPage from "../components/pages/admin/login";

export const renderRoutes = routes => {
  return routes.map(route => renderRoute(route));
};

const renderRoute = route => {
  const Component = route.component;

  return (
    <Route
      exact={route.exact}
      key={route.key}
      path={route.path}
      render={props => <Component {...props} />}
    />
  );
};

export const routes = [
  {
    component: HomePage,
    path: "/",
    key: "/",
    exact: true,
  },
  {
    component: BlogPage,
    path: "/blog",
    key: "/blog",
    exact: false,
  },
  {
    component: AdminPage,
    path: "/admin",
    key: "/admin",
    exact: true,
  },
  {
    component: AdminLoginPage,
    path: "/admin/login",
    key: "/admin/login",
    exact: false,
  }
];
