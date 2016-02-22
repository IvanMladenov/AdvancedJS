(function () {
	require.config({
		paths: {
			'extensions': 'helpers/extensions',
			'generator': 'helpers/generator',
			'loader': 'html-loader',
			'actor': 'models/actor',
			'genre': 'models/genre',
			'performance': 'models/performance',
			'movie': 'models/movie',
			'review': 'models/review',
			'theatre': 'models/theatre'
		}
	})
}());

require(['generator', 'loader'], function(imdb, loadHtml){
	var genres;

	imdb.generateData();
	genres = imdb.getGenres();

	loadHtml('#genres', genres);

	// For testing
	console.log(genres);
});