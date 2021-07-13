import React from 'react';
import styled from 'styled-components';
import PieChartIcon from '@material-ui/icons/PieChart';
const Sidebar = () => {
  return (
    <Container>
      <LogoContainer>
        <img src="/logo_dark.png" alt="legex" />
      </LogoContainer>
      <ItemContainer>
        <IconContainer>
          <PieChartIcon style={{ fill: '#5D5FEF' }} />
        </IconContainer>
        <span> Profile </span>
      </ItemContainer>
      <ItemContainer>
        <IconContainer>
          <PieChartIcon style={{ fill: '#5D5FEF' }} />
        </IconContainer>
        <span> Conversations </span>
      </ItemContainer>
      <ItemContainer>
        <IconContainer>
          <PieChartIcon style={{ fill: '#5D5FEF' }} />
        </IconContainer>
        <span> Orders </span>
      </ItemContainer>
      <ItemContainer>
        <IconContainer>
          <PieChartIcon style={{ fill: '#5D5FEF' }} />
        </IconContainer>
        <span> Settings </span>
      </ItemContainer>
      <ItemContainer>
        <IconContainer>
          <PieChartIcon style={{ fill: '#5D5FEF' }} />
        </IconContainer>
        <span> Logout </span>
      </ItemContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 320px;
  height: 100vh;
  background-color: #fff;
  img {
    max-height: 100%;
  }
`;
const LogoContainer = styled.div`
  padding-top: 54px;
  padding-left: 32px;
  padding-bottom: 20px;
`;
const ItemContainer = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  margin-right:10px;
  font-size: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: center;
`;

export default Sidebar;
