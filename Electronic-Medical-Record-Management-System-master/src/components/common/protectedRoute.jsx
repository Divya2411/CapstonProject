import React from "react";
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ render, component: Component, ...rest }) => {
  const user = auth.getCurrentUser();
  const admin = user.isAdmin;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        if (!admin && props.location.pathname.includes("/doctors"))
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
