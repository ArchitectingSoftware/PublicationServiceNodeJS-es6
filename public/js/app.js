'use strict';

/* App Module */

var appRoot = angular.module('BrianApp', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home',
            {
                templateUrl: 'partials/main.html',   controller: MainPageCtrl
            }
          ).
      when('/demo',
            {
                templateUrl: 'partials/demo.html', controller: DemoCtrl
            }
          ).
      when('/personal',
        {
          templateUrl: 'partials/personal.html', controller: PersonalCtrl
        }
      ).
      otherwise({redirectTo: '/home'});
}]);
