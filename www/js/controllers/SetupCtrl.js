app.controller('SetupCtrl',
  function ($scope, $ionicModal, $rootScope, $ionicPlatform, $ionicPopover, $cordovaLocalNotification, $timeout,
            $ionicLoading, $cordovaBadge, notifService) {

  /*  function addMinutes(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    }

    $rootScope.background = function () {
      document.addEventListener('deviceready', function () {
        function loadPromo() {
          $scope.promos = {};
          $scope.notifs = {};
          notifService.getPromo().then(function (response) {
            $scope.promos = response.data;
            for (var i = 0; i < $scope.promos.length; i++) {
              $cordovaLocalNotification.schedule({
                id: i,
                text: $scope.promos[i].produit,
                title: $scope.promos[i].nom,
                at: addMinutes(new Date(), 10 * i)
              }).then(function () {
                cordova.plugins.notification.badge.get(function (badge) {
                  cordova.plugins.notification.badge.set(badge + 1);
                });
              });
            }
          });
        }

        loadPromo();

        cordova.plugins.notification.local.on("click", function (notification, state) {
          cordova.plugins.notification.badge.get(function (badge) {
            cordova.plugins.notification.badge.set(badge > 0 ? badge - 1 : 0);
          });
        }, this);


        cordova.plugins.backgroundMode.setDefaults({
          title: 'App is running in background',
          text: 'Doing heavy tasks.',
          bigText: false,
          resume: true,
          silent: true,
          hidden: true,
          color: undefined,
          icon: 'icon'
        });
        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.on('activate', function () {
          console.log('==> background mode is activate');
          setTimeout(function () {
            $cordovaLocalNotification.clearAll();

            cordova.plugins.backgroundMode.configure({
              text:'Running in background for more than 60s now.'
            });

            loadPromo();
          }, 60000);
        });
      }, false);
    }*/
  }
);
