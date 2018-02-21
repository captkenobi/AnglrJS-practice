(function() {
    angular.module("testRoute", ["ngRoute"])
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            
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