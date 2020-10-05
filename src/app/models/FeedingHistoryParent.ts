export abstract class FeedingHistoryParent {
  title = 'Default';
  type = 'ColumnChart';
  data = [];
  columnNames = ['Date', 'Default'];
  options = {
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      minValue: 0,
    },
    isStacked: false,
  };
  width = 550;
  height = 400;

  buildChart(): void {
    this.generateChart();
    this.data.sort(function (a, b) {
      var aComps = a[0].split('/');
      var bComps = b[0].split('/');
      var aDate = new Date(aComps[2], aComps[0] - 1, aComps[1]);
      var bDate = new Date(bComps[2], bComps[0] - 1, bComps[1]);
      return aDate.getTime() - bDate.getTime();
    });
  }

  abstract generateChart(): void;
}
