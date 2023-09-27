import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
