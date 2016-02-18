var models = models || {};

(function(scope){
    function Item(title, description, price){
        this.title = title;
        this.description = description;
        this.price = Number(price);
        this._costomerReviews = [];
    }

    Item.prototype.addCustomerReview = function addCustomerReview(review){
        this._costomerReviews.push(review);
    };

    Item.prototype.getCustomerReviews = function getCustomerReviews(){
        return this._costomerReviews;
    };

    scope._item = Item;

    scope.getItem = function getItem(title, description, price){
        return new Item(title, description, price);
    }
})(models);


(function(scope){
    function UsedItem(title, description, price, condition){
        scope._item.call(this, title, description, price);
        this.condition = condition;
    }

    UsedItem.extends(scope._item);

    scope.getUsedItem = function getUsedItem(title, description, price, condition){
        return new UsedItem(title, description, price, condition);
    }

})(models);