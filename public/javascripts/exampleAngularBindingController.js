var exampleAngularBindingController = function ($scope) {
  $scope.myInput = " world!";
};
angular
  .module('myApp', [])
  .controller('exampleAngularBindingController', exampleAngularBindingController);