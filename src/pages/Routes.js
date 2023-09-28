import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';

export const Routes = () => {
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/linkedin" component={LinkedInCallback} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
