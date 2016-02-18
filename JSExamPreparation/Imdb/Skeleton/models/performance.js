var imdb = imdb || {};

(function(scope){
    function Performance(lenght, rating, country){
        this.length = lenght;
        this.country = country;
        this.rating = rating;
        this._actors = [];
        this._reviews = [];
    }

    Performance.prototype.addActor = function addActor(actor){
        this._actors.push(actor);
    }

    Performance.prototype.addReview = function addReview (review){
        this._reviews.push(review);
    }

    Performance.prototype.getActors = function getActors (){
        return this._actors;
    }

    Performance.prototype.getReviews = function getReviews (){
        return this._reviews;
    }

    Performance.prototype.deleteReview = function deleteReview (review){
        this._reviews.splice(this._reviews.indexOf(review), 1)
    }

    Performance.prototype.deleteReviewById = function deleteReviewById (id){
        this._reviews = this._reviews.filter(function(review){
            return review.id !== id;
        })
    }

    scope._performance = Performance;
})(imdb);