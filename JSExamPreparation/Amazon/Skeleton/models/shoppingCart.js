var models = models || {};

(function(scope){
    function ShoppingCart(){
        this._items = [];
    }

    ShoppingCart.prototype.addItem = function addItem(item){
        this._items.push(item);
    };

    ShoppingCart.prototype.getTotalPrice = function getTotalPrice(){
        var sum = 0;
        this._items.forEach(function(item){
            sum+=item.price;
        });

        return sum;
    };

    scope.getShopingCart = function getShoppingCart(){
        return new ShoppingCart();
    }
})(models);