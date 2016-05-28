var the_details=angular.module("construct", ['ngRoute','appcontroller','ngAnimate']);
var appcontroller=angular.module('appcontroller',[]);

the_details.config(['$routeProvider',function($routeProvider) {
       $routeProvider.
       when('/',{
              templateUrl:'home.html'
       }).
       when('/projects',{
              templateUrl:'projects.html',
              controller:'projestsCtr'
       }).
       when('/serv_building',{
              templateUrl:'serv_building.html'
       }).
       when('/serv_interior',{
              templateUrl:'serv_interior.html'
       }).
       when('/serv_landscape',{
              templateUrl:'serv_landscape.html'
       }).
       when('/contact',{
              templateUrl:'contacts.html'
       }).
       when('/serv_aluminum',{
              templateUrl:'serv_aluminum.html'
       }).
       when('/serv_other',{
              templateUrl:'serv_other.html'
       }).
       when('/team',{
              templateUrl:'team.html',
              controller:'teamCtr'
       }).
       when('/plan',{
              templateUrl:'plan.html'
       }).
       when('/price',{
              templateUrl:'price.html'
       });
}]);
