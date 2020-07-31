const initialState = {
  currentAnime: null,
  token: 'yes',
  currentAnimeInfo: null,
  search: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_ANIME':
      return {
        ...state,
        currentAnime: action.payload,
      };
    case 'CURRENT_ANIME_INFO':
      return {
        ...state,
        currentAnimeInfo: action.payload,
      };
    case 'TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
