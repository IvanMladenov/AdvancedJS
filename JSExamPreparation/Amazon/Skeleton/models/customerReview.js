var models = models || {};

(function(scope){
    function CustomerReview(customer, content, rating, date){
        this.customer = customer;
        this.content = content;
        this.rating = rating;
        this.date = date;
    }

    scope.getCustomerReview = function getCustomerReview(customer, content, rating, date){
        return new CustomerReview(customer, content, rating, date);
    }
})(models);