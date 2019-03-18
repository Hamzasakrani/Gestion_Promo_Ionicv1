app.controller('AppCtrl',
  function ($scope, $ionicModal, $rootScope, $ionicPlatform, $ionicPopover, $cordovaLocalNotification, $timeout,
            $ionicLoading,$window, $cordovaBadge, notifService ) {

/*var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">Languge</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding" >' +
                    '       <div class="list"><label class="item item-input item-select"><div class="input-label">Languge</div><select ng-modal="selectValue" ng-change="Languge()"><option>FR</option><option selected>dech</option></select></label><br><button  class="button button-block button-positive" ng-click="Languge()">ok</button></div> ' +
                    '   </ion-content>' +
                    '</ion-popover-view>';
*/
  $scope.popover=  $ionicPopover.fromTemplateUrl('templates/popover.html', {
scope: $scope,
}).then(function(popover) {
   $scope.popover = popover;
});
    $scope.Languge = function(data)
    {   
      
       
       if(data.pir=='de')
        {
            
           localStorage.setItem('language', 'de-DE');
        } 
        else if (data.pir=='fr')
        {
            
             localStorage.setItem('language', 'fr-FR');
        }  

     $window.location.reload();
    
    };
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });


      var lang = localStorage.getItem("language");
     if(lang=='de-DE')
        {
           $scope.m1="Früchte";
           $scope.m2="Schlächterei";
           $scope.m3="Bäckerei";
           $scope.m4="Fisch";
           $scope.m5="Versorgung";
           $scope.m6="Nicht essen";
       }
        else
        {
           $scope.m1="Fruits";
           $scope.m2="Boucherie";
           $scope.m3="Boulangerie";
           $scope.m4="Poissonnerie";
           $scope.m5="Alimentation";
           $scope.m6="Non food";
        }

  });
