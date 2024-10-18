import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const ADD_ARTICLE = 'article/addArticle';
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  }
}

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };

    case ADD_ARTICLE:
      return {
        ...state,
        entries: [...state.entries, action.article] // Ensure immutability
      };

    default:
      return state;
  }
};

export default articleReducer;


