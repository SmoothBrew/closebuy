angular.module('forSale', ['forSale.services'])

.controller('ForSaleController', function($scope, ItemsForSale, $state) {

  var promise = ItemsForSale.getMyForSaleItems();

  $scope.status = "item-calm";
  promise.then(function(items) {
  	console.log(items);
  	$scope.items = items;
  });

});