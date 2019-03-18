angular.module('starter.services', [])

//NOTE: We are including the constant `ApiEndpoint` to be used here.
.factory('notifService', function($http, Promo) {


  var getNotif = function() {
    return $http.get(Promo.url + '/update')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };
   var getPromo = function() {
    return $http.get(Promo.url + '/notif')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };
  return {
    getPromo: getPromo,
    getNotif: getNotif
  };
})
.factory('promoService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promo')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };
  /* var getrecherche = function() {
    $scope.data={};
    var request = $http({
            method: "post",
            url: Promo.url + '/recherche',
    //        crossDomain : true,
             dataType: "jsonp",
            data: {
                //_method: 'POST',
                dated: $scope.data.dated,
                dated: $scope.data.datef
            },
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (res){
           console.log('date: ', data);
          return res;   
        });
  };*/

  return {
    getPromo: getPromo,
    // getrecherche: getrecherche
  };
})
.factory('promofruitService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promofruit')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promoalimentationService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promoalimentation')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promonofoodService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promonofood')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promopoissonerieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promopoissonerie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promoboucherieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promoboucherie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})

.factory('promoboulangerieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promoboulangerie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodeService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promode')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodefruitService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodefruit')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodealimentationService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodealimentation')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodenofoodService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodenofood')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodepoissonerieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodepoissonerie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})
.factory('promodeboucherieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodeboucherie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})

.factory('promodeboulangerieService', function($http, Promo) {


  var getPromo = function() {
    return $http.get(Promo.url + '/promodeboulangerie')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getPromo: getPromo
  };
})