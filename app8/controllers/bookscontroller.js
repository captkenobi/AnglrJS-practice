(function() {

    angular.module("myApp")
    
        .controller("booksController", ["$scope", "myFactory", "$http", function($scope, myFactory, $http) {
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

            // $http({"method": "GET", "url": "data.html"})
            //     .success(function(res, status) {
            //         console.log(res);
            //     })
            //     .error(function(res, status) {
            //         alert("ERROR: " + status);
            //     })

            // $http.get("data.html")
            //     .success(function(res, status) {

            //     })
            //     .error(function(res, status) {

            //     });

            var data = {
              "var1" : "1",
              "var2" : "2"  
            };

            $http.post("data.php", data)
                .success(function(res, status) {
                    $scope.data = res;
                })
                .error(function(res, status) {
                    console.log(res, status);
                });
        }]);

    angular.module("myApp").filter("myFilter", function() {
        return function(str) {
            return str[0].toUpperCase() + str.slice(1);
        }
    });
})();