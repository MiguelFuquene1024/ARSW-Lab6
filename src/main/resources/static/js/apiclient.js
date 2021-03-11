var apiclient = (function () {
    return {
        getBlueprintsByAuthor: function (author, callback) {
            const blue = $.get({
                url: "/blueprints/" + author,
                contentType: "application/json",
            });
            blue.then(function (data) {
                    callback(null, data);
                }, function (error) {
                    alert("No existen blueprints del autor!")
                }
            );
        },

        getBlueprintsByNameAndAuthor: function (name, author, callback) {
            const blue = $.get({
                url: "/blueprints/" + author + "/" + name,
                contentType: "application/json",
            });
            blue.then(function (data) {
                    callback(null, data);
                }, function (error) {
                    alert("No existen blueprints del autor")
                }
            );
        }
    }
})();