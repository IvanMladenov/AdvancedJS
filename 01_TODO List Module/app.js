(function () {
    require.config({
        paths: {
            'container': 'models/container',
            'item': 'models/item',
            'section': 'models/section'
        }
    })
})();

require(['container'], function (Container) {

    var container = new Container('Tuesday TODO List');
    container.addToDOM('#wrapper');
});
