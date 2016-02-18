var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
				var liElements = Array.prototype.slice.call(moviesContainer.firstElementChild.childNodes);
				liElements.forEach(function(li){
					li.addEventListener('click', function(){
						var movie = genre.getMovies().filter(function(movie){
							return movie._id == li.getAttribute('data-id')
						})[0];
						detailsContainer.innerHTML = '';
						detailsContainer.appendChild(loadMoviesInfo(movie));
					})
				})
			}
		});
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	function loadMoviesInfo (movie){
		var actors = movie.getActors(),
			reviews = movie.getReviews(),
			allInfo = document.createElement('div'),
			divActors = document.createElement('div'),
			divReviews = document.createElement('div'),
			actorsUl = document.createElement('ul'),
			reviewsUl = document.createElement('ul');

		divActors.innerHTML = '<h3>Actors</h3>';
		divReviews.innerHTML = '<h3>Reviews</h3>';

		actors.forEach(function(actor){
			var li = document.createElement('li');
			li.setAttribute('li-actor-id', actor._id);
			li.innerHTML = '<h4>' + actor.name + '</h4>';
			li.innerHTML += '<div><strong>Bio:</strong> ' + actor.bio + '</div>';
			li.innerHTML += '<div><strong>Born:</strong> ' + actor.born + '</div>';
			actorsUl.appendChild(li);
		});

		reviews.forEach(function(review){
			var li = document.createElement('li');
			li.setAttribute('li-review-id', review._id);
			li.innerHTML = '<h4>' + review.author + '</h4>';
			li.innerHTML += '<div><strong>Content:</strong> ' + review.content + '</div>';
			li.innerHTML += '<div><strong>Date:</strong> ' + review.date + '</div>';
			var button = document.createElement('button');
			button.innerHTML = 'Delete review';
			button.addEventListener('click', function(){
				reviewsUl.removeChild(li);
				movie.deleteReviewById(review._id);
			});
			li.appendChild(button);
			reviewsUl.appendChild(li);
		});

		divActors.appendChild(actorsUl);
		divReviews.appendChild(reviewsUl);
		allInfo.appendChild(divActors);
		allInfo.appendChild(divReviews);

		return allInfo;
	}

	scope.loadHtml = loadHtml;
}(imdb));