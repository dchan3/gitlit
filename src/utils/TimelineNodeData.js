export default class TimelineNodeData {
  constructor(obj) {
    var keys = [
      'parentHash', 'ownHash', 'user', 'email', 'timestamp', 'offset',
      'message'
    ];
    for (var i in obj) {
      if (keys.indexOf(i) > -1) this[i] = obj[i];
    }
  }
}
