import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Lectures } from "./Lectures";
import { Courses } from "./Courses";
import { Training } from "./Training";
import { Login } from "./Login";
import { Teams } from "./Teams";
import { Subscribe } from "../Components/Subscribe";

export const RoutersPage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lectures" component={Lectures} />
        <Route path="/courses" component={Courses} />
        <Route path="/teams" component={Teams} />
        <Route path="/training" component={Training} />
        <Route path="/login" component={Login} />
      </Switch>
      {/* <Subscribe /> */}
      <Footer />
    </BrowserRouter>
  );
};
