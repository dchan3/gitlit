import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const TimelineNodeContainer = styled.div`
  border: thin black solid;
  border-radius: 4px;
  padding: 10px 15px;
`;

export default class CommitTimelineNode extends Component {
  render() {
    return (
      <TimelineNodeContainer>
        <p>{this.props.node.message}</p>
        <p>{moment(new Date(
          Number.parseInt(this.props.node.timestamp * 1000)))
          .format("MMMM DD, YYYY HH:mm") + ' - ' +
          moment.duration(
            moment(new Date(Number.parseInt(this.props.node.timestamp * 1000)))
              .diff(new Date())).humanize(true)
        }</p>
      </TimelineNodeContainer>
    );
  }
}
