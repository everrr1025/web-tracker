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

// const DescriptionSection = ({ match, location }) => {
//   const name = match.params.name;
//   const icon = location.icon;
//   return (
//     <SectionContainer>
//       <Icon src={icon} />
//       <Description>
//         the description of {name}
//       </Description>
//     </SectionContainer>
//   );
// };
const DescriptionSection = ({ app }) => {
  
  return (
    <SectionContainer>
      <Icon src={app.instance} />
      <Description>
        the description of {app.name}
      </Description>
    </SectionContainer>
  );
};
export default DescriptionSection;
