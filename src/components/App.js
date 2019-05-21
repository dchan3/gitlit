import React, { Component } from 'react';
import Menu from './screens/Menu';
import Explorer from './screens/Explorer';
import CommitTimeline from './visuals/CommitTimeline';
import ScrollableDivWithPizzazz from './reusables/ScrollableDivWithPizzazz';
import fs from 'fs';
import styled from 'styled-components';
import { exec } from 'child_process';
import { remote } from 'electron';

const AppFrame = styled.div`
  display: inline-block;
  width: 100%;
  height: calc(100vh - 160px);
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wd: null,
      files: [],
      getRepo: false,
      ref: null
    };
  }

  handleFolderOpen(filenames) {
    var dir = filenames[0], ls = fs.readdirSync(dir);
    this.setState({ wd: filenames[0], files: ls,
      getRepo: ls.indexOf('.git') > -1,
      ref: ls.indexOf('.git') > -1 ?
        fs.readFileSync(dir + '/.git/HEAD', 'utf-8').substring(5).trim() : null
    });
  }

  handleCheckout(branch) {
    var self = this;
    exec('cd ' + this.state.wd + ' && git checkout ' + branch,
      function(err) {
        if (err) remote.dialog.showErrorBox("Error", err.message );
      });
  }

  render() {
    return [
      <Menu inRepo={this.state.getRepo} wd={this.state.wd} headRef={
        this.state.ref ? this.state.ref.split('/').slice(-1)[0] : null}
      callback={this.handleFolderOpen.bind(this)}
      handleChange={this.handleCheckout.bind(this)} />,
      <AppFrame>
        {this.state.getRepo ? <CommitTimeline
          filename={this.state.wd} headRef={this.state.ref}/> :
          <ScrollableDivWithPizzazz>
            <p>No repo. Like make one?</p>
          </ScrollableDivWithPizzazz>}
        <Explorer files={this.state.files} />
      </AppFrame>
    ];
  }
}
