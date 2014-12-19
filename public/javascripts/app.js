angular.module('SeasonsApp', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    });

}])

.controller('HomeController', ['$scope', '$http', function($scope, $http) {


  $scope.findWeather = function(zip) {
    $scope.place = '';
    $scope.fetchWeather(zip);
  };


  $scope.fetchWeather = function(coordinates) {
    weatherService.getWeather(coordinates).then(function(data){
      // console.log("hi");
      $scope.place = data;
      $scope.temp = data.temp;
      $scope.nighttemp = data.templo;
      $scope.dayweather = angular.lowercase(data.condition);
      $scope.nightweather = angular.lowercase(data.nightcond);
     
      $scope.bkcondition = "";
      $scope.nightweathercondition = "";
      $scope.daytempcondition = "";
      $scope.nighttempcondition = "";

      switch(true) {
        case ($scope.temp < 33):
          $scope.daytempcondition = "freezing";
          // $scope.nighttempcondition = "freezing";
          break;
        case ($scope.temp < 41):
          $scope.daytempcondition = "shivering";
          // $scope.nighttempcondition = "shivering";
          break;
        case ($scope.temp < 51):
          $scope.daytempcondition = "cold";
          // $scope.nighttempcondition = "cold";
          break;        
        case ($scope.temp < 61):
          $scope.daytempcondition = "chilly";
          // $scope.nighttempcondition = "chilly";
          break;        
        case ($scope.temp < 71):
          $scope.daytempcondition = "average";
          // $scope.nighttempcondition = "average";
          break;        
        case ($scope.temp < 81):
          $scope.daytempcondition = "warm";
          // $scope.nighttempcondition = "warm";
          break;        
        case ($scope.temp < 91):
          $scope.daytempcondition = "hot";
          // $scope.nighttempcondition = "hot";
          break;          
        case ($scope.temp > 92):
          $scope.daytempcondition = "dying";
          // $scope.nighttempcondition = "dying";
          break;
      }      

      switch(true) {
        case ($scope.nighttemp < 33):
          $scope.nighttempcondition = "freezing";
          break;
        case ($scope.nighttemp < 41):
          $scope.nighttempcondition = "shivering";
          break;
        case ($scope.nighttemp < 51):
          $scope.nighttempcondition = "cold";
          break;        
        case ($scope.nighttemp < 61):
          $scope.nighttempcondition = "chilly";
          break;        
        case ($scope.nighttemp < 71):
          $scope.nighttempcondition = "average";
          break;        
        case ($scope.nighttemp < 81):
          $scope.nighttempcondition = "warm";
          break;        
        case ($scope.nighttemp < 91):
          $scope.nighttempcondition = "hot";
          break;          
        case ($scope.nighttemp > 92):
          $scope.nighttempcondition = "dying";
          break;
      }

      switch($scope.dayweather) {
        case "rain": 
        case "heavy rain": 
        case "light rain": 
        case "thunderstrom": 
        case "thunderstroms": 
        case "chance of rain": 
        case "chance rain": 
        case "chance of thunderstroms": 
        case "chance of freezing rain": 
        case "freezing rain":
          $scope.bkcondition = "rain";
          // $scope.nightweathercondition = "rain";
          break;
        case "chance of flurries": 
        case "flurries": 
        case "chance of snow":
        case "light snow": 
        case "snow":
        case "heavy snow": 
        case "chance of flurries": 
        case "flurries": 
        case "sleet":
          $scope.bkcondition = "snow";
          // $scope.nightweathercondition = "snow";
          break;
        case "wind": 
        case "windy":
          $scope.bkcondition = "windy";
          // $scope.nightweathercondition = "windy";
          break;        
        case "mostly sunny": 
        case "sunny": 
        case "clear": 
        case "partly cloudy": 
        case "partly sunny":
          $scope.bkcondition = "sunny";
          // $scope.nightweathercondition = "sunny";
          break;        
        case "fog": 
        case "haze": 
        case "cloudy": 
        case "mostly cloudy": 
        case "scattered clouds": 
        case "overcast":
          $scope.bkcondition = "cloudy";
          // $scope.nightweathercondition = "cloudy";
          break;        
        default:
          $scope.bkcondition = "unknown";
          // $scope.nightweathercondition = "unknown";
      }

        switch($scope.nightweather) {
        case "rain": 
        case "heavy rain": 
        case "light rain": 
        case "thunderstrom": 
        case "thunderstroms": 
        case "chance of rain": 
        case "chance rain": 
        case "chance of thunderstroms": 
        case "chance of freezing rain": 
        case "freezing rain":
          $scope.nightweathercondition = "rain";
          break;
        case "chance of flurries": 
        case "flurries": 
        case "chance of snow":
        case "light snow": 
        case "snow":
        case "heavy snow": 
        case "chance of flurries": 
        case "flurries": 
        case "sleet":
          $scope.nightweathercondition = "snow";
          break;
        case "wind": 
        case "windy":
          $scope.nightweathercondition = "windy";
          break;        
        case "mostly sunny": 
        case "sunny": 
        case "clear": 
        case "partly cloudy": 
        case "partly sunny":
          $scope.nightweathercondition = "sunny";
          break;        
        case "fog": 
        case "haze": 
        case "cloudy": 
        case "mostly cloudy": 
        case "scattered clouds": 
        case "overcast":
          $scope.nightweathercondition = "cloudy";
          break;        
        default:
          $scope.nightweathercondition = "unknown";
      }
    });     
  };

}]);