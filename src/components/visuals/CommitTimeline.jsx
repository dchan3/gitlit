import React, { Component } from 'react';
import CommitTimelineNode from './CommitTimelineNode';
import import_log from '../../utils/import_log';
import ScrollableDivWithPizzazz from '../reusables/ScrollableDivWithPizzazz';

export default class CommitTimeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableDivWithPizzazz>
        {import_log(this.props.filename + '/.git/logs/' + this.props.headRef)
          .nodes.map(function(node) {
            return <CommitTimelineNode node={node} />;
          })}
      </ScrollableDivWithPizzazz>
    );
  }
}
