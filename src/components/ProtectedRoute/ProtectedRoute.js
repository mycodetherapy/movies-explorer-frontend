import { Route, Navigate } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() =>
      props.loggedIn ? <Component {...props} /> : <Navigate exact to="/" />
    }
  </Route>
);

export default ProtectedRoute;
