import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//没有权限重定向到登录页
const auth = window.user.data;
const renderRoutes = (routes, switchProps = {}) => {
  const router = [];

  routes.forEach((route, i) => {
    if (route.permission.includes(auth)) {
      router.push(
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => (
            <route.component {...props} {...route.extraProps} route={route} />
          )}
        />
      );
    } else {
      router.push(
        <Redirect key={route.key || i} from={route.path} to="/login"></Redirect>
      );
    }
  });
  return (
    <Switch {...switchProps}>
      {router}
      <Redirect to="/not-found" />
    </Switch>
  );
};
//普通没有权限配置
// const renderRoutes = (routes, switchProps = {}) => {
//   return (
//     <Switch {...switchProps}>
//       {routes.map((route, i) => (
//         <Route
//           key={route.key || i}
//           path={route.path}
//           exact={route.exact}
//           strict={route.strict}
//           render={(props) => (
//             <route.component {...props} {...route.extraProps} route={route} />
//           )}
//         />
//       ))}
//       <Redirect to="/not-found" />
//     </Switch>
//   );
// };

export default renderRoutes;
