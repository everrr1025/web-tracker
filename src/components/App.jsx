import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Header from "./Header";
import AppSectionContainer from "../containers/AppSectionContainer";
import "w3-css/w3.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;

  width: 100%;
  height:auto;
  min-width:400px;
  margin:auto;
  background-color: #f2f2f2;

  @media (min-width: 700px) {
    padding:1rem;
	}
`;

const Footer = styled.footer`

padding :1rem;
font-size:1rem;
 @media (min-width: 700px) {
    display:none;
	}
`;

//

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <AppSectionContainer />
        <Footer>You are using a device with Width less than 700px</Footer>
      </AppContainer>
    );
  }
}

export default App;
