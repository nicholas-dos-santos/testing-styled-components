import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  );
};
