define([], function () {
    return (function () {
        function Actor(name, bio, born) {
            this.name = name;
            this.bio = bio;
            this.born = born;
        }

        return Actor;
    })();
});
