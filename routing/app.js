(function() {
    angular.module("testRoute", ["ngRoute"])
        .config(["$routeProvider", function($routeProvider) {
            $routeProvider.when("/", {
                "template": "home page"
            })
            .when("/books", {
                "templateUrl": "templates/books.html",
                "controller": "mainController"
            })
            .when("/books/:id", {
                "templateUrl": "templates/book.html",
                "controller": "bookController"
            })
            .otherwise({
                "template": "404"
            })
        }]);
})()