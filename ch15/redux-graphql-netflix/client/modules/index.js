const { combineReducers } = require('redux')
const {
  reducer: movies
} = require('./movies.js')

module.exports = combineReducers({
  movies
})
