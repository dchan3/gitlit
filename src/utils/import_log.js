import fs from 'fs';
import parse_log from './parse_log';
import TimelineTree from './TimelineTree';

const import_log = function(file) {
  var text = fs.readFileSync(file, 'utf-8').split('\n');
  var data = text.map(function(line) {
    return parse_log(line);
  });
  return new TimelineTree(data.slice(0,-1));
}

export default import_log;
