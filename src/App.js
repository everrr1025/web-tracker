// @flow
import React, { Component } from "react";

import styled from "styled-components";

import { Route, Switch } from "react-router-dom";

import asyncComponent from "./AsyncComponent.js";

const Homea = () => {
    <div>
        <h2>This is the home aaa!</h2>
    </div>
}

const AsyncHome = asyncComponent(() => import("./Home"));

const AsyncPost = asyncComponent(() => import("./Posts"));

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleGreen = styled(Title)`
	font-size: 2.5em;
  text-align: center;
	color: red;
`;

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/posts/:id" exact component={AsyncPost} />
        <div>
          <div></div>
        </div>
      </Switch>
      
    );
  }
}

export default App;
