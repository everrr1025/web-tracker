import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Header from "./Header";
import AppSectionContainer from "../containers/AppSectionContainer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;

  width: 80%;
  margin:auto;
  padding:1rem;
  background-color: #eaf0f7;
`;

// 

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <AppSectionContainer />
      </AppContainer>
    );
  }
}

export default App;
