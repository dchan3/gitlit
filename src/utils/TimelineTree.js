export default class TimelineTree {
  constructor(nodes) {
    this.nodes = nodes;
    this.nodes.sort(function(a,b) {
      if (Number.parseInt(a.timestamp) > Number.parseInt(b.timestamp)) {
        return -1;
      }
      else if (Number.parseInt(a.timestamp) < Number.parseInt(b.timestamp)) {
        return 1;
      }
      else { return 0; }
    });
    /* this.nodes.sort(function(a, b) {
      if (a.parentHash === b.parentHash) {
        if (Number.parseInt(a.timestamp) > Number.parseInt(b.timestamp)) {
          return 1;
        }
        else if (Number.parseInt(a.timestamp) < Number.parseInt(b.timestamp)) {
          return -1;
        }
        else { return 0; }
      }
      else if (a.ownHash === b.parentHash) { return -1; }
      else if (b.ownHash === a.parentHash) { return 1; }
      else return 0;
    }); */
  }
}
