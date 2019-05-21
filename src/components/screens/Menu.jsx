import React, { Component } from 'react';
import ScreenHeader from '../reusables/ScreenHeader';
import ClickableIcon from '../reusables/ClickableIcon';
import { remote } from 'electron';
import fs from 'fs';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: this.props.headRef || null
    };
  }

  handleClick() {
    remote.dialog.showOpenDialog({ properties: ['openDirectory'] },
      (files) => { this.props.callback(files);
      }
    );
  }

  handleExit() {
    remote.getCurrentWindow().close();
  }

  handleSelectChange(event) {
    this.props.handleChange(event.target.value);
    this.setState({ branch: event.target.value });
  }

  componentWillMount() {

  }

  render() {
    var handleSelectChange = this.handleSelectChange.bind(this);
    console.log(this.state);

    return (
      <div style={{ height: "160px" }}>
        <ScreenHeader text="GitLIT"/>
        <div style={{ display: 'flex' }}>
          <ClickableIcon icon="folder-open" text='Open'
            handleClick={this.handleClick.bind(this)} fontSize='32px' />
          <ClickableIcon icon="times" text='Exit'
            handleClick={this.handleExit.bind(this)} fontSize='32px' />
        </div>
        <div>{!!this.props.wd ?
          ("Current Working Directory: " + this.props.wd) :
          "Nothing opened."}</div>
        <div>{(this.props.inRepo && !!this.state.branch) ?
          ["On branch ",
            <select value={this.state.branch} onChange={
              (e) => { handleSelectChange(e); } }>
              {fs.readdirSync(this.props.wd + "/.git/refs/heads").map(
                function(branch) {
                  return <option value={branch}>{branch}</option>
                })}
            </select>] :
          "Not in repo."}</div>
      </div>
    );
  }
}
