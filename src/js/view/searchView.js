class searchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const recipes = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return recipes;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandler(handle) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new searchView();
