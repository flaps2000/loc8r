(function () {

  angular
    .module('loc8rApp')
    .filter('formatDistance', formatDistance);

  var _isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  function formatDistance () {
  return function (distance) {
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance > 999) {
        numDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
      } else {
        numDistance = parseInt(distance);
        unit = 'm';
      }
      return numDistance + unit;
    } else {
      return "?";
    }
  };
  }


})();
(function () {

  angular
    .module('loc8rApp')
    .service('geolocation', geolocation);

  function geolocation () {
    var getPosition = function (cbSuccess, cbError, cbNoGeo) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
      }
      else {
        cbNoGeo();
      }
    };
    return {
      getPosition : getPosition
    };
  }


})();
(function() {

  angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http'];
  function loc8rData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

})();
(function () {

  angular
    .module('loc8rApp')
    .directive('ratingStars', ratingStars);

  function ratingStars () {
    return {
      restrict: 'EA',
      scope: {
        thisRating : '=rating'
      },
      templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
    };
  }


})();
(function () {

  angular
    .module('loc8rApp')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function homeController ($scope, loc8rData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    };
    vm.sidebar = {
      content: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."
    };
    vm.message = "Checking your location";

    vm.getData = function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      vm.message = "Searching for nearby places";
      loc8rData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

    vm.noGeo = function () {
      $scope.$apply(function() {
        vm.message = "Geolocation is not supported by this browser.";
      });
    };

    geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);

  }

})();
(function () {

  angular.module('loc8rApp', ['ngRoute']);

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeController',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', config]);

})();