import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../not-found";
import App from "../app";
import Nav from "../nav";
import "../styles/base.scss";
import Item from "../images/item.png";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="navbar">
          <Nav />
        </div>
        <div className="link-1">
          <a className="link-file" href="#files">
            Файлы
          </a>
        </div>

        <div className="appbar">
          {/* <img src={Item}></img> */}

          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="link-2">
          <a className="link-map" href="#map">
            Местоположение
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Router;