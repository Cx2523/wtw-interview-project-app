import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  background-color: black;
  font-size: 30px;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
`;

function Header() {
  return (
    <StyledHeaderDiv>
      Agent License Manager
    </StyledHeaderDiv>
  );
}

export default Header;
