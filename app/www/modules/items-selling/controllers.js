angular.module('forSale', ['forSale.services'])

.controller('ForSaleController', function($scope, ItemsForSale, $state) {

	$scope.test = 'hello';
	console.log('inside forSale controller');

  var promise = ItemsForSale.getMyForSaleItems();

  promise.then(function(items) {
  	console.log('items are: ', items);
  });

});