import styled from "styled-components";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";

import facebook from "../resources/assets/facebook.svg";
import youtube from "../resources/assets/youtube.svg";
import line from "../resources/assets/line.svg";
import bebo from "../resources/assets/bebo.svg";
import twitter from "../resources/assets/twitter.svg";

import asyncComponent from "../utils/AsyncComponent";

const AppListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem;
`;

const Item = styled.div`
  width: 8rem;
  margin-right: 2rem;
`;

const AsyncDescriptionSection = asyncComponent(() =>
  import("./DescriptionSection")
);
// class AppSection extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apps: [
//         { name: "facebook", instance: facebook },
//         { name: "youtube", instance: youtube },
//         { name: "line", instance: line },
//         { name: "bebo", instance: bebo },
//         { name: "twitter", instance: twitter }
//       ]
//     };
//   }

//   render() {
//     const showApps = apps => {
//       return apps.map((app, index) => {
//         return (
//           <Item key={index}>
//                <Link to={{pathname:`/apps/${app.name}`, icon:app.instance}} >
//             <img src={app.instance} /></Link>
//           </Item>
//         );
//       });
//     };

//     return (
//       <AppSectionContainer>
//         {showApps(this.state.apps)}
//       </AppSectionContainer>
//     );
//   }          <Link to={{ pathname: `/apps/${app.name}`, icon: app.instance }}>
// }
const apps = [
  { name: "facebook", instance: facebook },
  { name: "youtube", instance: youtube },
  { name: "line", instance: line },
  { name: "bebo", instance: bebo },
  { name: "twitter", instance: twitter }
];

const AppSection = ({ showApp, onIconClick }) => {
  const showApps = apps => {
    return apps.map((app, index) => {
      return (
        <Item key={index}>
          <img
            src={app.instance}
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
      {showApp && <AsyncDescriptionSection app={showApp}/>}
    </div>
  );
};
export default AppSection;
