app.controller('DetaiCtrl', function ($state,$http,$scope, $stateParams,$ionicPlatform,$cordovaBadge,ionicMaterialInk,$cordovaLocalNotification,$timeout, $ionicLoading,promoService,$ionicHistory) {
    $scope.data={};
    var detai = localStorage.getItem("detai");
    
    var lang = localStorage.getItem("language");
     if(lang=='de-DE')
        {
   var request = $http({
            method: "get",
            //url: "http://localhost/promoapp/public/detai/"+detai,
            url: "http://seedup.tn/promoapp/public/detaide/"+detai,
    //        crossDomain : true,
            
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (res){
         $scope.data = res.data;
          
         $scope.myTitleVar="Werbedetails";    
        });}
        else
        {
          var request = $http({
            method: "get",
            //url: "http://localhost/promoapp/public/detai/"+detai,
            url: "http://seedup.tn/promoapp/public/detai/"+detai,
    //        crossDomain : true,
            
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (res){
         $scope.data = res.data;
          $scope.myTitleVar="details de la promotion";
             
        });
        }
   ionicMaterialInk.displayEffect();

});