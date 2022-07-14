/*---------------Link Web--------------------*/
var app = angular.module("myApp",["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Prize.html"
        })
        .when("/Chem", {
            templateUrl: "home/Prize/Chem.html"
        })
        .when("/Phy", {
            templateUrl: "home/Phy.html"
        })
        .when("/Medi", {
            templateUrl: "home/Medi.html"
        })
        .when("/Lit", {
            templateUrl: "home/Lit.html"
        })
        .when("/Pea", {
            templateUrl: "home/Pea.html"    
        });
})

// app.run(function($rootScope, $http){
//     $http.get("data/chem.json").then(function(rsp){
//         $rootScope.Chemis = rsp.data.Chemistry;
//     })
//     $http.get("data/phy.json").then(function(rsp){
//         $rootScope.Phys = rsp.data.Physic;
//     })
//     $http.get("data/medi.json").then(function(rsp){
//         $rootScope.Medic = rsp.data.Medicine;
//     })
//     $http.get("data/lit.json").then(function(rsp){
//         $rootScope.Liter = rsp.data.Literature;
//     })
//     $http.get("data/pea.json").then(function(rsp){
//         $rootScope.Peace = rsp.data.Peace;
//     })
//     // trang prize
//     $http.get("Prize/Data/chem.json").then(function(res){
//         $rootScope.Chem = res.data.Chemistry;
//     })
//     $http.get("Prize/Data/phy.json").then(function(res){
//         $rootScope.Phy = res.data.Physic;
//     })
//     $http.get("Prize/Data/medi.json").then(function(res){
//         $rootScope.Medi = res.data.Medicine;
//     })
//     $http.get("Prize/Data/lit.json").then(function(res){
//         $rootScope.Lit = res.data.Literature;
//     })
//     $http.get("Prize/Data/pea.json").then(function(res){
//         $rootScope.Pea = res.data.Peace;
//     })
// })     

// app.controller("prizeCtrl",function($scope){

// })
// app.controller("showCtrl",function($scope){
//     $scope.showInfo =function(){
//         confirm("Thank you for registering")
//     }
// })

