/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(3);
	var express = __webpack_require__(4);
	var graphqlHTTP = __webpack_require__(5);
	var schema = __webpack_require__(6);
	var _process$env = process.env,
	    _process$env$PORT = _process$env.PORT,
	    PORT = _process$env$PORT === undefined ? 3000 : _process$env$PORT,
	    _process$env$PWD = _process$env.PWD,
	    PWD = _process$env$PWD === undefined ? __dirname : _process$env$PWD;

	var app = express();

	app.use('/q', graphqlHTTP(function (req) {
	  return {
	    schema: schema,
	    context: req.session
	  };
	}));

	app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')));

	// app.use('/build/:file', (req, res) => {
	//   res.sendFile(req.params.file, {
	//     root: path.resolve(PWD, 'build')
	//   })
	// })

	app.use('*', function (req, res) {
	  res.sendFile('index.html', {
	    root: PWD
	  });
	});

	app.listen(PORT, function () {
	  return console.log('Running server on port ' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express-graphql");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(7),
	    GraphQLSchema = _require.GraphQLSchema,
	    GraphQLObjectType = _require.GraphQLObjectType,
	    GraphQLList = _require.GraphQLList,
	    GraphQLString = _require.GraphQLString,
	    GraphQLInt = _require.GraphQLInt,
	    GraphQLFloat = _require.GraphQLFloat;

	var movies = __webpack_require__(8);

	var movie = new GraphQLObjectType({
	  name: 'Movie',
	  fields: {
	    title: {
	      type: GraphQLString
	    },
	    cover: {
	      type: GraphQLString
	    },
	    year: {
	      type: GraphQLString
	    },
	    cost: {
	      type: GraphQLFloat
	    },
	    starring: {
	      type: new GraphQLList(new GraphQLObjectType({
	        name: 'starring',
	        fields: {
	          name: {
	            type: GraphQLString
	          }
	        }
	      }))
	    }
	  }
	});

	module.exports = new GraphQLSchema({
	  query: new GraphQLObjectType({
	    name: 'Query',
	    fields: {
	      movies: {
	        type: new GraphQLList(movie),
	        resolve: function resolve() {
	          return movies;
	        }
	      },
	      movie: {
	        type: movie,
	        args: {
	          index: {
	            type: GraphQLInt
	          }
	        },
	        resolve: function resolve(r, _ref) {
	          var index = _ref.index;
	          return movies[index - 1];
	        }
	      }
	    }
	  })
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("graphql");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "Pirates of the Caribbean: On Stranger Tides",
			"cover": "/dist/images/On_Stranger_Tides_Poster.jpg",
			"year": "2011",
			"cost": 378.5,
			"starring": [
				{
					"name": "Johnny Depp"
				},
				{
					"name": "Penélope Cruz"
				},
				{
					"name": "Ian McShane"
				},
				{
					"name": "Kevin R. McNally"
				},
				{
					"name": "Geoffrey Rush"
				}
			]
		},
		{
			"title": "Pirates of the Caribbean: At World's End",
			"cover": "/dist/images/Pirates_AWE_Poster.jpg",
			"year": "2007",
			"cost": 300,
			"starring": [
				{
					"name": "Johnny Depp"
				},
				{
					"name": "Orlando Bloom"
				},
				{
					"name": "Keira Knightley"
				},
				{
					"name": "Geoffrey Rush"
				},
				{
					"name": "Stellan Skarsgård"
				}
			]
		},
		{
			"title": "Avengers: Age of Ultron",
			"cover": "/dist/images/Avengers_Age_of_Ultron.jpg",
			"year": "2015",
			"cost": 279.9,
			"starring": [
				{
					"name": "Robert Downey Jr."
				},
				{
					"name": "Chris Hemsworth"
				},
				{
					"name": "Mark Ruffalo"
				},
				{
					"name": "Chris Evans"
				},
				{
					"name": "Scarlett Johansson"
				}
			]
		},
		{
			"title": "John Carter",
			"cover": "/dist/images/John_carter_poster.jpg",
			"year": "2012",
			"cost": 263.7,
			"starring": [
				{
					"name": "Taylor Kitsch"
				},
				{
					"name": "Lynn Collins"
				},
				{
					"name": "Samantha Morton"
				},
				{
					"name": "Mark Strong"
				},
				{
					"name": "Ciarán Hinds"
				}
			]
		},
		{
			"title": "Tangled",
			"cover": "/dist/images/Tangled_poster.jpg",
			"year": "2010",
			"cost": 260,
			"starring": [
				{
					"name": "Mandy Moore"
				},
				{
					"name": "Zachary Levi"
				},
				{
					"name": "Donna Murphy"
				}
			]
		},
		{
			"title": "Spider-Man 3",
			"cover": "/dist/images/Spider-Man_3%2C_International_Poster.jpg",
			"year": "2007",
			"cost": 258,
			"starring": [
				{
					"name": "Tobey Maguire"
				},
				{
					"name": "Kirsten Dunst"
				},
				{
					"name": "James Franco"
				},
				{
					"name": "Thomas Haden Church"
				},
				{
					"name": "Topher Grace"
				}
			]
		},
		{
			"title": "Harry Potter and the Half-Blood Prince",
			"cover": "/dist/images/harry-potter-and-the-half-blood-prince.jpg",
			"year": "2009",
			"cost": 250,
			"starring": [
				{
					"name": "Daniel Radcliffe"
				},
				{
					"name": "Rupert Grint"
				},
				{
					"name": "Emma Watson"
				},
				{
					"name": "Jim Broadbent"
				},
				{
					"name": "Helena Bonham Carter"
				}
			]
		},
		{
			"title": "Spectre",
			"cover": "/dist/images/MV5BMjIwNTA1MDA2Ml5BMl5BanBnXkFtZTgwNzIzMTA5NDE@._V1_SX640_SY720_.jpg",
			"year": "2015",
			"cost": 245,
			"starring": [
				{
					"name": "Daniel Craig"
				},
				{
					"name": "Christoph Waltz"
				},
				{
					"name": "Léa Seydoux"
				},
				{
					"name": "Ben Whishaw"
				},
				{
					"name": "Naomie Harris"
				}
			]
		},
		{
			"title": "Avatar",
			"cover": "/dist/images/Avatar-Teaser-Poster.jpg",
			"year": "2009",
			"cost": 237,
			"starring": [
				{
					"name": "Sam Worthington"
				},
				{
					"name": "Zoe Saldana"
				},
				{
					"name": "Stephen Lang"
				},
				{
					"name": "Michelle Rodriguez"
				},
				{
					"name": "Sigourney Weaver"
				}
			]
		},
		{
			"title": "The Dark Knight Rises",
			"cover": "/dist/images/Dark_knight_rises_poster.jpg",
			"year": "2012",
			"cost": 230,
			"starring": [
				{
					"name": "Christian Bale"
				},
				{
					"name": "Michael Caine"
				},
				{
					"name": "Gary Oldman"
				},
				{
					"name": "Anne Hathaway"
				},
				{
					"name": "Tom Hardy"
				}
			]
		}
	];

/***/ }
/******/ ]);