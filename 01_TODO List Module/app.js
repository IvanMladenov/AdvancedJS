(function () {
    require.config({
        paths: {
            'factory' : 'factory',
            'container': 'models/container',
            'item': 'models/item',
            'section': 'models/section'
        }
    })
})();

require(['factory'], function (Factory) {

    var container = Factory.Container('Tuesday TODO List');
    container.addToDOM('#wrapper');
});
