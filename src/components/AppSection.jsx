import styled from "styled-components";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import facebook from "../resources/assets/facebook.svg";
import youtube from "../resources/assets/youtube.svg";
import line from "../resources/assets/line.svg";
import bebo from "../resources/assets/bebo.svg";
import twitter from "../resources/assets/twitter.svg";
import skype from "../resources/assets/skype.svg";

import asyncComponent from "../utils/AsyncComponent";

const AppListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 700px) {
    width: initial;
  }
`;

const Item = styled.div`
  min-width: 8rem;
  width: 33.3%;
  cursor: pointer;

  @media (min-width: 700px) {
    width: initial;
  }
`;

const AsyncDescriptionSection = asyncComponent(() =>
  import("./DescriptionSection")
);

const apps = [
  { name: "facebook", icon: facebook },
  { name: "youtube", icon: youtube },
  { name: "skype", icon: skype },
  { name: "line", icon: line },
  { name: "bebo", icon: bebo },
  { name: "twitter", icon: twitter }
];

const Header = () => <div>This is head</div>;

const AppSection = ({ showApp, onIconClick }) => {
  const showApps = apps => {
    return apps.map((app, index) => {
      return (
        <Item key={index}>
          <img
            src={app.icon}
            onClick={() => {
              onIconClick(app);
            }}
          />
        </Item>
      );
    });
  };

  return (
    <div>
      <AppListContainer>
        {showApps(apps)}
      </AppListContainer>
      <Route path="/apps/:name" component={AsyncDescriptionSection} />

      {/* {showApp && <AsyncDescriptionSection app={showApp}/>}  */}
    </div>
  );
};
export default AppSection;
