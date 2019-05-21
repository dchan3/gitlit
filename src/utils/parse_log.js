import TimelineNodeData from './TimelineNodeData';

const parse_row = (input) => {
  var massive_rgx =
    /^([0-9a-z]+) ([0-9a-z]+) ([-_0-9A-Za-z]+) <([-_0-9A-Za-z]+@[-_0-9a-z.]+\.[a-z]+)> ([0-9]+) ([+-][0-9]+)[\s\t]+(.+)$/;

  if (massive_rgx.test(input)) {
    var data = massive_rgx.exec(input).slice(1), keys = [
      'parentHash', 'ownHash', 'user', 'email', 'timestamp', 'offset',
      'message'];
    var obj = {};
    for (var i in keys) {
      obj[keys[i]] = data[i];
    }
    return new TimelineNodeData(obj);
  }
  else return undefined;
}

export default parse_row;
