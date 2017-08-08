import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color:white;
`;

const Icon = styled.img`
  width: 4rem;
  vertical-align: text-bottom;
`;

const Description = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin:0 1rem;
`;

const DescriptionSection = ({ match, location }) => {
  
  return (
    <SectionContainer>
      <Icon src={location.state.icon} />
      <Description>
        the description of {location.state.name}
      </Description>
    </SectionContainer>
  );
};
export default DescriptionSection;
