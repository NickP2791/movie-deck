const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  getGenresList: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  getMovies: (questResults, removedGenres, years) => {
    let newGenres = questResults.toString().split(",").join("%2C");
    let newRemoved = removedGenres.toString().split(",").join("%2C");

    const yearConvert = (yr) => -yr + 2020 + 1970;
    let highYear = yearConvert(years[0]) + "-12-31";
    let lowYear = yearConvert(years[1]) + "-01-01";

    return `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&release_date.gte=${lowYear}&release_date.lte=${highYear}&with_genres=%5B${newGenres}%5D&without_genres=${newRemoved}&with_original_language=en`;
  },
  getMovieInfo: (checkMovieId) =>
    `/movie/${checkMovieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
  getCollection: (collectionId) =>
    `/collection/${collectionId}?api_key=${API_KEY}&language=en-US`,
  getImage: (imgURL) => `https://image.tmdb.org/t/p/w500${imgURL}`,
  getImageSmall: (imgURL) => `https://image.tmdb.org/t/p/w300${imgURL}`,
  getBio: (castId) =>
    `/person/${castId}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`,
  getCredits: (castId) =>
    `/person/${castId}/movie_credits?api_key=${API_KEY}&language=en-US`,
  getTrend: `/trending/all/week?api_key=${API_KEY}`,
};

export default requests;
