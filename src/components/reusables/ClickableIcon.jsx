import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faTimes } from '@fortawesome/free-solid-svg-icons';

const IconContainer = styled.div`
  text-align: center;
  width: calc(${props => props.fontSize || '24px'} * 2);
  margin: auto;
`;

const CircularDiv = styled.div`
  border: 2px black solid;
  background-color: yellow;
  border-radius: 50%;
  width: ${props => props.fontSize || '24px'};
  height: ${props => props.fontSize || '24px'};
  padding: calc(${props => props.fontSize || '24px'} / 3) calc(${props => props.fontSize || '24px'} / 3) 0;
  margin: 2px;
  text-align: center;
  &:hover {
    border-color: yellow;
    background-color: black;
    color: yellow;
  }
`;

const IconLabel = styled.span`
  font-family: 'Comic Sans MS', sans-serif;
  font-size: calc(${props => props.fontSize || '24px'} / 2);
`;

export default class ClickableIcon extends Component {
  constructor(props) {
    super(props);
    library.add(faFolderOpen);
    library.add(faTimes);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <IconContainer>
        <CircularDiv onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon icon={this.props.icon} />
        </CircularDiv>
        <IconLabel>{this.props.text}</IconLabel>
      </IconContainer>
    );
  }
}
