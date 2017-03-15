describe('omdb service', function() {
	var movieData = { "Title": "Lego Star Wars: The Freemaker Adventures", "Year": "2016–", "Rated": "N/A", "Released": "20 Jun 2016", "Runtime": "23 min", "Genre": "Animation, Action, Comedy", "Director": "N/A", "Writer": "Bill Motz, Bob Roth, Carrie Beck, Jake Blais, Leland Chee, Jason Cosler, Keith Malone, John McCormack", "Actors": "Vanessa Lengies, Grey DeLisle, Nicolas Cantu, Matthew Wood", "Plot": "The series stars the Freemakers, a family of scavengers who build and sell starships from the scoured debris of space battles strewn throughout the galaxy. When their youngest discovers a ...", "Language": "English", "Country": "USA", "Awards": "N/A", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMwODgyMF5BMl5BanBnXkFtZTgwODI2Nzk5NzE@._V1_SX300.jpg", "Metascore": "N/A", "imdbRating": "8.0", "imdbVotes": "265", "imdbID": "tt5459566", "Type": "series", "totalSeasons": "1", "Response": "True" };
	var movieDataById = { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg", "Metascore": "92", "imdbRating": "8.7", "imdbVotes": "963,318", "imdbID": "tt0076759", "Type": "movie", "Response": "True" };
	var omdbApi;
	beforeEach(function(){
		angular.mock.module('omdb');
		angular.mock.inject(function(_omdbApi_) {
			omdbApi = _omdbApi_;
		});
	});
	it('should return movie details', function() {
		
		// angular.mock.module({
		// 	omdbApi: {
		// 		search: function(query) {
		// 			return 'star wars';
		// 		}
		// 	}
		// });
		// angular.mock.module(function($provide) {
		// 	$provide.factory('omdbApi', function() {
		// 		return {
		// 			search: function() {
		// 				return 'star wars';
		// 			}
		// 		}
		// 	});
		// });
		// angular.mock.inject(function(_omdbApi_) {
		// 	omdbApi = _omdbApi_;
		// })
		expect(omdbApi.search()).toEqual(movieData);
	});
	it('should return movie by id', function() {
		// var omdbApi;
		// angular.mock.module('omdb');
		// angular.mock.inject(function(_omdbApi_) {
		// 	omdbApi = _omdbApi_;
		// });
		// angular.mock.inject(function(_omdbApi_) {
		// 	omdbApi = _omdbApi_;
		// })
		expect(omdbApi.find('tt0076759')).toEqual(movieDataById);
	});
});