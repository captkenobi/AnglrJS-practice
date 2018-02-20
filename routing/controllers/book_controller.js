(function() {
    angular.module("testRoute")
        .controller("bookController", ["$scope", "$routeParams", function($scope, $routeParams) {
            $scope.title = "BOOK";
            $scope.id = $routeParams.id;

        }]);
})()