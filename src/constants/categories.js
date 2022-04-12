const categories = {
  HTML: { value: 'html', label: 'HTML' },
  CSS: { value: 'css', label: 'CSS' },
  JAVASCRIPT: { value: 'javascript', label: 'JavaScript' },

  get default() {
    return this.HTML;
  },

  get options() {
    return [
      this.HTML,
      this.CSS,
      this.JAVASCRIPT,
    ];
  }
};

export default categories;
