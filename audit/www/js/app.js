// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('degrAud', ['ionic', 'degrAud.services', 'degrAud.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    
    // the class list tab has its own child nav-view and history
    .state('tab.class-list', {
        url: '/class-list',
        views: {
            'class-list-tab': {
                templateUrl: 'templates/class-list.html',
                controller: 'auditCtrl'
            }
        }
    })

    .state('tab.class-detail', {
        url: '/class-list/:classId',
        views: {
            'class-list-tab': {
                templateUrl: 'templates/class-detail.html',
                controller: 'auditDetailCtrl'
            }
        }
    })

    .state('tab.class-taken', {
        url: '/class-taken',
        views: {
            'class-taken-tab': {
                templateUrl: 'templates/class-taken.html',
                controller: 'auditCtrl'
            }
        }
    })

    .state('tab.class-need', {
        url: '/class-need',
        views: {
            'class-need-tab': {
                templateUrl: 'templates/class-need.html',
                controller: 'auditCtrl'
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/class-list');

});
