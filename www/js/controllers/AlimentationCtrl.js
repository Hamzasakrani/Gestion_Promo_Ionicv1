app.controller('AlimentationCtrl', function (promodealimentationService,$state,$http,$scope, $stateParams, $timeout, ionicMaterialInk,promoalimentationService) {
    //ionic.material.ink.displayEffect();
     $scope.promos = {}
    
           var lang = localStorage.getItem("language");
     if(lang=='de-DE')
        {
            $scope.myTitleVar="Allgemeines Essen";
           promodealimentationService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
         });
        }
        else
        {
            $scope.myTitleVar="Alimentation générale";
            promoalimentationService.getPromo().then(function(response){
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
            $scope.myTitleVar="Allgemeines Essen";
           promodealimentationService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
         });
        }
        else
        {
            $scope.myTitleVar="Alimentation générale";
            promoalimentationService.getPromo().then(function(response){
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