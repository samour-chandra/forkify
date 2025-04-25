import * as model from './model';
import paginationView from './views/paginationView';
import recipeView from './views/recipeView';
import resultsView from './views/resultsView';
import searchView from './views/searchView';

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
// samour chandra paul

const recipeControler = async function () {
  try {
    recipeView.loadSpinner();
    // get  data
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`Devlper handel the error from here ${err}`);
    recipeView.loadError();
  }
};

const searchResultsControl = async function () {
  try {
    // render spinner
    resultsView.loadSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearch(query);
    resultsView.render(model.recipePerPage(1));
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (pages) {
  resultsView.render(model.recipePerPage(pages));
  paginationView.render(model.state.search);
};
const controlServings = fucntion(){
  // update the recipe servings in the state


  // update the view
}
const init = function () {
  recipeView.loadHandaler(recipeControler);
  searchView.addSubmitHandler(searchResultsControl);
  paginationView.handlePagination(controlPagination);
};
init();
// /////////////////////////////////////////////////////////////////////////////////////
