const filters = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',

  get default() {
    return this.ALL;
  }
};

export default filters;
