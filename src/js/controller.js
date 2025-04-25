import * as modal from './modal';
import recipeView from './view/recipeView';
import resultsView from './view/resultsView';
import searchView from './view/searchView';

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

/////////////////////////////////////// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
// samour chandra paul
const recipeControler = async function () {
  try {
    // loadSpinner
    recipeView.handleSpinner();
    // get id from the id handle event
    const id = window.location.hash.slice(1);
    // push id and get data from the url
    await modal.loadRecipe(id);
    // render the recipe in the display
    recipeView.render(modal.state.recipe);
  } catch (err) {
    recipeView.renderErrorMessage();
  }
};

const controlSearchResults = async function () {
  try {
    // render the spinner
    resultsView.handleSpinner();
    // get the query
    const query = searchView.getQuery();
    if (!query) return;
    // get all the recipes
    await modal.loadSearchResults(query);
    resultsView.render(modal.state.search.results);
  } catch (err) {
    console.error(err);
    // recipeView.renderErrorMessage();
  }
};

const servingsControl = function (newServings) {
  modal.updateServings(newServings);

  recipeView.render(modal.state.recipe);
};

const init = function () {
  recipeView.handleControl(recipeControler);
  searchView.addHandler(controlSearchResults);
  recipeView.handleServings(servingsControl);
};
init();
