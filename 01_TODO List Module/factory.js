define(['item', 'container', 'section'], function (Item, Container, Section) {
    return {
        Item: function (content) {
            return new Item(content)
        },
        Container: function (title) {
            return new Container(title)
        },
        Section: function (title) {
            return new Section(title)
        }
    };
});