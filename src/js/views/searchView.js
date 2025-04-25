class searchView {
  _parentElement = document.querySelector('.search');

  clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addSubmitHandler(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }
}
export default new searchView();
