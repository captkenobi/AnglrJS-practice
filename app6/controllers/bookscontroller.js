(function() {

    angular.module("myApp")
    
        .controller("booksController", ["$scope", "myFactory", function($scope, myFactory) {
            $scope.books = myFactory;
            $scope.test = "test";
        
            $scope.add = function() {
                if (angular.isDefined($scope.name)) {
                    $scope.books.push({
                        title: $scope.name,
                        year: "2002",
                        price: "21 руб."
                    });
                } else {
                    alert("ERROR: Put name of book")
                }
            };
        }]);
})();