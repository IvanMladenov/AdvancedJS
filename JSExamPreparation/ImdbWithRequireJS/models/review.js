define([], function () {
    return (function () {
        function Review(author, content, date) {
            this.author = author;
            this.content = content;
            this.date = date;
        }

        return Review;
    })();
});

