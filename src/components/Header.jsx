import styled from "styled-components";
import React, { PureComponent } from "react";

import icon from "../resources/assets/pac-man.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: middle;
  align-items: center;
  margin:1rem;
`;
const Icon = styled.img`
  width: 8rem;
  align-self: flext-start;
  vertical-align: text-bottom;
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Icon src={icon} />
        <Title>... .... ... the starter project bootstrapped with Create React App</Title>
      </HeaderContainer>
    );
  }
}

export default Header;
