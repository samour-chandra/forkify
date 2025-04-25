export class view {
  _data;
  _errorMessage = `we could not find any recipe ! please try again later`;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMessage();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  handleSpinner() {
    const markupSpinner = `
      <div class="spinner">
            <svg>
              <use href="src/img/icons.svg#icon-loader"></use>
            </svg>
          </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupSpinner);
  }
  renderErrorMessage(message = this._errorMessage) {
    const markupError = `
        <div class="error">
            <div>
              <svg>
                <use href="src/img/icons.svg#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupError);
  }
}
