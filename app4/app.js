(function() {
    const app = angular.module("myApp", []);

    app.controller("controller1", ["$scope", function($scope) {
        this.name = "kenobi-001";
    }]);

    app.controller("controller2", ["$scope", function($scope) {
        this.name = "kenobi-003";
    }]);

    app.controller("controller3", ["$scope", function($scope) {
        this.name = "";

        this.hello = function() {
            alert(this.name);
        };

        this.books = [
            {
                title: "Час быка",
                year: "2001",
                price: "45 руб."
            },
            {
                title: "Лезвие бритвы",
                year: "2005",
                price: "65 руб."
            },
            {
                title: "Туманность андромеды",
                year: "1988",
                price: "25 руб."
            },
            {
                title: "Стальная крыса",
                year: "2007",
                price: "145 руб."
            },
            {
                title: "Мир смерти",
                year: "2009",
                price: "35 руб."
            },
        
        ]

    }]);






})();