import view from './view';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');
  handlePagination(handle) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const pageCount = +btn.dataset.goto;
      handle(pageCount);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resPerPage
    );
    const curPage = this._data.page;
    console.log(numPages, curPage + 1, curPage - 1);
    //page 1 , there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }
    // end page no other page
    if (curPage === numPages && numPages > 1) {
      return `
        <button ${curPage - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      
      `;
    }

    // others
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
        </button>
        <button ${curPage - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
    }
    return '';
  }
}

export default new paginationView();
