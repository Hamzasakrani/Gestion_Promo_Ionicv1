// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova', 'starter.services',]);

app
  .run(function ($ionicPlatform, $rootScope, $timeout,$cordovaGeolocation) {
    $ionicPlatform.ready(function () {
    

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
     
     var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    
          
       
    };

   
    window.plugins.OneSignal
    .startInit("3073b04f-72ed-4bb1-93b9-ec7d233092ec")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

    navigator.globalization.getPreferredLanguage(
        function (language) {  
        
          var lang=language.value;
          var lang = localStorage.getItem("language");
          if(lang==null)
           {
            localStorage.setItem('language', lang);
            }

       
           
        },
        function () {
            alert('Error getting language\n');
        }
    );
    });
  })
  .constant('Promo', {
    // url: 'http://localhost/promoapp/public'
    url: 'http://seedup.tn/promoapp/public/'
  })


app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.toutes', {
      url: '/toutes',
      views: {
        'menuContent': {
          templateUrl: 'templates/toutes.html',
          controller: 'ToutesCtrl'
        }
      }
    })

    .state('app.boulangerie', {
      url: '/boulangerie',
      views: {
        'menuContent': {
          templateUrl: 'templates/boulangerie.html',
          controller: 'BoulangerieCtrl'
        }
      }
    })


    .state('app.poissonerie', {
      url: '/poissonerie',
      views: {
        'menuContent': {
          templateUrl: 'templates/poissonerie.html',
          controller: 'PoissonerieCtrl'
        }
      }
    })

    .state('app.fruit', {
      url: '/fruit',
      views: {
        'menuContent': {
          templateUrl: 'templates/fruit.html',
          controller: 'FruitCtrl'
        }
      }
    })
    .state('app.no_food', {
      url: '/no_food',
      views: {
        'menuContent': {
          templateUrl: 'templates/no_food.html',
          controller: 'NoFoodCtrl'
        }
      }
    })
     .state('app.alimentation', {
      url: '/alimentation',
      views: {
        'menuContent': {
          templateUrl: 'templates/alimentation.html',
          controller: 'AlimentationCtrl'
        }
      }
    })

    .state('app.detai', {
      url: '/detai',
      views: {
        'menuContent': {
          templateUrl: 'templates/detai.html',
          controller: 'DetaiCtrl'
        }
      }
    })

    .state('app.boucherie', {
      url: '/boucherie',
      views: {
        'menuContent': {
          templateUrl: 'templates/boucherie.html',
          controller: 'BoucherieCtrl'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/toutes');
});
