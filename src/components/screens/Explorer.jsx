import React, { Component } from 'react';
import ScrollableDivWithPizzazz from '../reusables/ScrollableDivWithPizzazz';

export default class Explorer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableDivWithPizzazz>
        {this.props.files.length ? this.props.files.map((file) =>
          <div><p>{file}</p></div>
        ) :
          <p>No get nothing here. Like <a>make one new repo?</a></p> }
      </ScrollableDivWithPizzazz>
    );
  }
}
