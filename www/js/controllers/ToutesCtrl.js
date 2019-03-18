app.controller('ToutesCtrl', function (promodeService,$state,$http,$scope, $stateParams,$ionicPlatform,$cordovaBadge,ionicMaterialInk,$cordovaLocalNotification,$timeout, $ionicLoading,promoService,$ionicHistory) {
    //ionic.material.ink.displayEffect();
   $scope.navTitle='<img class="title-image" src="img/promo.png" />';
   $scope.promos = {}
     notif= {}
     var lang = localStorage.getItem("language");
     if(lang=='de-DE')
        {
          $scope.myTitleVar="Alle Aktionen"
          promodeService.getPromo().then(function(response){
                $scope.promos = response.data;
                cordova.plugins.notification.badge.get(function (badge) {
                    cordova.plugins.notification.badge.set(badge > 0 ? badge - 1 : 0);
                  });
             });
        }
        else
         {
          $scope.myTitleVar="Toutes les promotions"
          promoService.getPromo().then(function(response){
                $scope.promos = response.data;
                cordova.plugins.notification.badge.get(function (badge) {
                    cordova.plugins.notification.badge.set(badge > 0 ? badge - 1 : 0);
                  });
             });
        }
    
    $scope.doRefresh = function() {
        
      
        $timeout( function() {

        if(lang=='de-DE')
        { 
        promodeService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
     });
     }
        else
         {
        promoService.getPromo().then(function(response){
        $scope.promos = response.data;
               console.log('Got some data: ', response.data);
     });
        }
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
        };
    
  $scope.detai=function(detai)
  {
   // alert(detai);
   localStorage.setItem('detai',detai);
     //  $ionicHistory.currentView($ionicHistory.backView());
   $state.go('app.detai');
  }

  $scope.loadMore = function() {
    $scope.page ++;
    JobsServices.getJobs($scope.page).then(function(resolve) {
      $scope.jobs = $scope.jobs.concat(resolve.jobs);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
     ionicMaterialInk.displayEffect();

     $scope.recherche = function (data) {
      //$scope.data={};
  
       /*  var link = 'http://seedup.tn/promoapp/public/recherche';
 
        $http.post(link, {dated : data.dated}).then(function (res){
            $scope.response = res.data;
        });*/
        var datedebut,datefin;
        datedebut=data.dated;
        datefin=data.datef;
        dd= datedebut.getFullYear() + "-" + (datedebut.getMonth() + 1) + "-" + datedebut.getDate();
        df=datefin.getFullYear()+ "-" +  (datefin.getMonth() + 1) + "-" + datefin.getDate();
         var request = $http({
            method: "get",
            url: "http://seedup.tn/promoapp/public/recherche/"+dd+"/"+df,
    //        crossDomain : true,
            
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (res){ $scope.response = res.data;
          $scope.promos  = res.data;
      
        });
}
});