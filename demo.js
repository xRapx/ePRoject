var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "demo.html"
        })
        .when("/test", {
            templateUrl: "test.html",
           
        })
})
app.controller("addCtrl", ['$scope', function ($scope) {
    $scope.page = "";
}]);
app.directive("eProject",()=>{
    return{
        restrict:'AEM',
       template:"<footer><div class=\"div-footer1\"><a href=\"#!about\">About US</a> <a href=\"#!faq\">FAQ</a> <a href=\"\">Contact:</a></div><div class=\"div-footer2\"><ul><li><i class=\"material-icons\">pin_drop</i>590 Cach Mang Thang 8 ,ward 11, district 3, Ho Chi Minhcity,Vietnam <i class=\"fa-solid fa-location-dot\"></i></li><li><i class=\"material-icons\">local_phone</i>+84 22030 3507</li><li><i class=\"material-icons\">local_post_office</i>nobelprize.org@gmail.com</li></ul></div></footer>",
       controller:"addCtrl"
    }   
})