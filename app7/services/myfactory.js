(function() {

    angular.module("myApp")

       .factory("myFactory", ["$filter", function($filter) {
            return [
                {
                    title: "час быка",
                    year: "2001",
                    price: $filter("currency")(1000, "RUB ", 2)
                },
                {
                    title: "лезвие бритвы",
                    year: "2005",
                    price: $filter("currency")(1000, "RUB ", 2)
                },
                {
                    title: "туманность андромеды",
                    year: "1988",
                    price: $filter("currency")(1000, "RUB ", 2)
                },
                {
                    title: "стальная крыса",
                    year: "2007",
                    price: $filter("currency")(1000, "RUB ", 2)
                },
                {
                    title: "мир смерти",
                    year: "2009",
                    price: $filter("currency")(1000, "RUB ", 2)
                },
            ]
        }]);
})();