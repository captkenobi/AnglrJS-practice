(function() {

    angular.module("myApp")

        .controller("mainController", ["$scope", "myFactory", function($scope, myFactory) {
            $scope.books = myFactory;
        }]);

})();