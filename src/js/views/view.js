export default class view {
  _data;
  _errorMessage = 'we could not find the recipe. please try another one!';
  render(data) {
    if (!data || data.length === 0) return this.loadError();
    this._data = data;
    const markup = this._generateMarkup();
    this._claer();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _claer() {
    this._parentElement.innerHTML = '';
  }
  loadSpinner() {
    const markup = `
      <div class="spinner">
          <svg>
              <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
      </div>
      `;
    this._claer();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  loadError(message = this._errorMessage) {
    const spinnerMarkup = `
        <div class="error">
                <div>
                  <svg>
                    <use href="src/img/icons.svg#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
        </div>
      `;
    this._claer();
    this._parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup);
  }
}
