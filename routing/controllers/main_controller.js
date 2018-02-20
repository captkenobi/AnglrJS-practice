(function() {
    angular.module("testRoute")
        .controller("mainController", ["$scope", function($scope) {
            $scope.title = "Books Page";
        }]);
})()