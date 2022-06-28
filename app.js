/*---------------Link Web--------------------*/
var app = angular.module("myApp",["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/prize", {
            templateUrl: "home/prize.html"         
        })
        .when("/alfrednobel", {
            templateUrl: "home/alfrednobel.html"
        })
        .when("/event", {
            templateUrl: "home/event.html"
        })
        .when("/news", {
            templateUrl: "home/news.html"
        })
        .when("/about", {
            templateUrl: "home/about.html"
        })
        .when("/faq", {
            templateUrl: "home/faq.html"
        })
})
/*---------------Service--------------------*/
app.service("myService", function () {
    this.myMethod = function () {

    }
})
/*---------------khai báo $rootScope--------------------*/
app.run (function($rootScope){
    $rootScope.color="blue";
})
app.controller("myCtrl",function($scope,myService){
    $scope.callService =function(){
        myService.myMethod();
    }
})
/*---------------Get Pass--------------------*/
app.controller("getPass-Ctrl", function ($scope) {   
    $scope.getPassword =() => {
        alert("Your password is" + $scope.password);
    }
})
/*
/*---------------Show Hide--------------------*/
/*var app = angular.module("myApp",[]);
app.controller("show-Ctrl", function ($scope) {
    $scope.myShow = false;
    $scope.showInfo = () => {
        $scope.myShow = !$scope.myShow;
    }
})
/*------------------add render with Directive---------------*/
/*app.controller("addCtrl",[$scope ,function($scope) {   
    $scope.page = "this is message";
}]);
app.directive("eProject",function(){
    return{
        restrict:'AEM',
        templateUrl: "home\home.html",
    }   
})
*/
