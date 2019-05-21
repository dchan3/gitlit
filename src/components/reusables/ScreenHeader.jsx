import React, { Component } from 'react';
import styled from 'styled-components';

// Yeah, that's right, I used Comic Sans, CUZ CAN! Now sit down and be quiet,
// ya ableist prick.

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Comic Sans MS", sans-serif;
`;

const HeaderText = styled.h1`
  margin: 0;
`;

export default class ScreenHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderText>{this.props.text}</HeaderText>
      </HeaderContainer>
    );
  }
}
