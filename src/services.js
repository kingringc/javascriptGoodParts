angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {

        var movieDataById = {
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "Rated": "PG",
            "Released": "25 May 1977",
            "Runtime": "121 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "George Lucas",
            "Writer": "George Lucas",
            "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
            "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            "Metascore": "92",
            "imdbRating": "8.7",
            "imdbVotes": "963,318",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Response": "True"
        };
        var baseURL = 'http://www.omdbapi.com/?';
        var deferred = $q.defer();

        function httpPromiseRequest(url) {
        	$http.get(url).success(function(response) {
        		deferred.resolve(response);
        	});
        	return deferred.promise;
        }

        function search(query) {
            var url = baseURL + 's=' + encodeURIComponent(query) + '&v=1'
            return httpPromiseRequest(url);
        }

        function find(id) {
        	var url = baseURL + 'i=' + encodeURIComponent(id) + '&v=1'
            return httpPromiseRequest(url);
        }

        return {
            search: search,
            find: find
        };

    });