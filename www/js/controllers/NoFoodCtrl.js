app.controller('NoFoodCtrl', function (promodenofoodService,$state,$http,$scope, $stateParams, $timeout, ionicMaterialInk,promonofoodService) {
    //ionic.material.ink.displayEffect();
     $scope.promos = {}
     
      var lang = localStorage.getItem("language");
     if(lang=='de-DE')
        {
            $scope.myTitleVar="Nicht Essen";
           promodenofoodService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
         });
        }
        else
        {
            $scope.myTitleVar="Non Food";
            promonofoodService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
    });
        }
     $scope.detai=function(detai)
       {
   // alert(detai);
             localStorage.setItem('detai',detai);
     //  $ionicHistory.currentView($ionicHistory.backView());
           $state.go('app.detai');
          };
$scope.doRefresh = function() {
        
      
        $timeout( function() {

        
        if(lang=='de-DE')
        {
            $scope.myTitleVar="Nicht Essen";
           promodenofoodService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
         });
        }
        else
        {
            $scope.myTitleVar="Non Food";
            promonofoodService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
    });
        }

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
        };
        
    ionicMaterialInk.displayEffect();

     
       
});