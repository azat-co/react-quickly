const { handleActions } = require('redux-actions')

const FETCHED_MOVIES = 'movies/FETCHED_MOVIES'
const FETCHED_MOVIE = 'movies/FETCHED_MOVIE'

module.exports = {
  fetchedMovies: (response) => ({
    type: FETCHED_MOVIES,
    movies: response.data.data.movies
  }),
  fetchedMovie: (response) => ({
    type: FETCHED_MOVIE,
    movie: response.data.data.movie
  }),
  reducer: handleActions({
    [FETCHED_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [FETCHED_MOVIE]: (state, action) => ({
      ...state,
      current: action.movie
    })
  }, {
    movies: [],
    movie: {}
  })
}
