const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOP':
      return {
        ...state,
        top: {
          topAnime: action.payload.topAnime,
          topManga: action.payload.topManga,
          upcoming: action.payload.upcoming,
          topMovie: action.payload.topMovie,
          airing: action.payload.airing,
          trendingAnime: action.payload.trendingAnime,
          trendingMovie: action.payload.trendingMovie,
        },
      };

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

    default:
      return state;
  }
};

export default Reducer;
