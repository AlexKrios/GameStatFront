import React from 'react';
import {Switch} from "react-router";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import {Provider} from "mobx-react";

import {renderRoutes, routes} from "./routes";

import RootStore from "./stores/RootStore";

import './index.css';

import MainLayout from "./layouts/main";

const store = {root: new RootStore()};

const renderApp = () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <MainLayout>
            {renderRoutes(routes)}
          </MainLayout>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

renderApp();