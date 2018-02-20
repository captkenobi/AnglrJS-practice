(function() {


    angular.module("myApp")
        .directive("wfmDir", function() {
            return {
                // "template": "<h4>Hello World</h4>",
                "templateUrl": "templates/directives/wfmdir.html",
                "restrict": "EA",
                "replace": true,
                // "controller": "booksController",
                "link": function(scope, elem, attrs) {

                    elem.on("click", function(e) {
                        // angular.element(e.target).parent().toggleClass("grey");
                    });

                    scope.clickTr = function(event) {
                        angular.element(event.currentTarget).toggleClass("grey");
                    };
                }

            };
        });


})();