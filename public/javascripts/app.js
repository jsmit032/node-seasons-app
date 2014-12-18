angular.module('SeasonsApp', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

}])

.controller('HomeController', ['$scope', function($scope) {
  $scope.test = "test";
}]);