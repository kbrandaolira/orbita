module.exports = class InstallationsByMonthDTO {
  constructor(month, count) {
    this.month = month;
    this.count = count;
  }

  add() {
    this.count++;
  }
};
