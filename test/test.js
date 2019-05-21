import React from 'react';
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import path, { resolve } from 'path';

import ClickableIcon from '../src/components/reusables/ClickableIcon';
import TimelineNodeData from '../src/utils/TimelineNodeData';
import parse_row from '../src/utils/parse_log';
import import_log from '../src/utils/import_log';

describe('Reusable Components', function() {
  it('icon renders label text correctly', function() {
    const component = render(<ClickableIcon text="Open" icon="folder-open" />);
    expect(component.find('span').text()).to.equal("Open");
  });
});

describe('Git Timeline Construction', function() {
  it('Timeline Node Data Object correctly constructed', function() {
    var nodeDataInput = {
        parentHash: '1234',
        ownHash: 'abcd',
        user: 'somebody',
        email: 'someone@some.where',
        timestamp: '1542353641481',
        offset: '-10',
        message: "Check my SoundCloud."
      },
      node = new TimelineNodeData(nodeDataInput),
      verdict = Object.keys(nodeDataInput).map(function(key) {
        return node[key] === nodeDataInput[key];
      }).reduce(function(acc, cur) {
        return acc && cur;
      });
    expect(verdict).to.equal(true);
  });
});

describe('Git Log Parser', function() {
  it('parses properly', function() {
    var input =
      '1234 abcd somebody <someone@some.where> 1542353641481 -10 Bruh';
    var expected = {
      parentHash: '1234',
      ownHash: 'abcd',
      user: 'somebody',
      email: 'someone@some.where',
      timestamp: '1542353641481',
      offset: '-10',
      message: "Bruh"
    };

    var result = parse_row(input),
      verdict = Object.keys(expected).map(function(key) {
        return expected[key] === result[key];
      }).reduce(function(acc, cur) {
        return acc && cur;
      });

    expect(verdict).to.equal(true);
  });

  it('imports logs as desired', function() {
    var result = import_log(resolve('./', 'test/resources/sample_log')).nodes;
    expect(result)
      .to.not.contain(undefined);
  });
});
