import { RECIPE_URL } from './config';
import { getJson } from './helper';

export const state = {
  recipe: {},
  search: {
    results: {},
    query: '',
    page: 1,
    resPerPage: 10,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${RECIPE_URL}${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    // console.error(`this error from the created ${err} modal file `);
    throw err;
  }
};

export const loadSearch = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${RECIPE_URL}?search=${query}`);
    const { recipes } = data.data;
    state.search.results = recipes.map(ing => {
      return {
        id: ing.id,
        imageUrl: ing.image_url,
        title: ing.title,
        publisher: ing.publisher,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const recipePerPage = function (page = state.search.page) {
  state.search.page = page;
  const startIndex = (page - 1) * state.search.resPerPage;
  const endIndex = page * state.search.resPerPage;
  return state.search.results.slice(startIndex, endIndex);
};

export const updateServings = function (newServing) {};
