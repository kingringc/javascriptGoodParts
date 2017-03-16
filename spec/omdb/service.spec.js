describe('omdb service', function() {
    var movieData = {
        "Search": [{
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: The Force Awakens",
            "Year": "2015",
            "imdbID": "tt2488496",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode I - The Phantom Menace",
            "Year": "1999",
            "imdbID": "tt0120915",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode III - Revenge of the Sith",
            "Year": "2005",
            "imdbID": "tt0121766",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode II - Attack of the Clones",
            "Year": "2002",
            "imdbID": "tt0121765",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDRkYzA4OGYtOTBjYy00YzFiLThhYmYtMWUzMDBmMmZkM2M3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: The Clone Wars",
            "Year": "2008",
            "imdbID": "tt1185834",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: The Clone Wars",
            "Year": "2008–2015",
            "imdbID": "tt0458290",
            "Type": "series",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU5YjNiNmEtMzNkNS00MDNkLWE2N2EtNjlmODAwZDdiYzYwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Clone Wars",
            "Year": "2003–2005",
            "imdbID": "tt0361243",
            "Type": "series",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTQ4MDY0MDAtZGJhNi00YWU3LThhMjgtMzVkZWIyZDU4M2Y1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }],
        "totalResults": "393",
        "Response": "True"
    };
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
    var omdbApi, $httpBackend;
    beforeEach(module('omdb'));
    beforeEach(inject(function(_omdbApi_, _$httpBackend_) {
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return movie details', function() {
        var responseData;

        $httpBackend.when('GET', 'http://www.omdbapi.com/?s=star%20wars&v=1').respond(200, movieData);

        omdbApi.search('star wars').then(function(data) {
            responseData = data;
        });

        $httpBackend.flush();

        expect(responseData).toEqual(movieData);
    });

    it('should return movie by id', function() {
    	var responseData;
    	$httpBackend.when('GET', 'http://www.omdbapi.com/?i=tt0076759&v=1').respond(200, movieDataById);

    	omdbApi.find('tt0076759').then(function(data) {
    		responseData = data
    	});

    	$httpBackend.flush();

        expect(responseData).toEqual(movieDataById);
    });
});