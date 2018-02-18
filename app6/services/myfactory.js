(function() {

    angular.module("myApp")

        .factory("myFactory", [function() {
            return [
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