angular.module('itemMap', ['buybrowse.services', 'google-maps'])

.controller('ItemMapController', function($scope, BuyItems, $state) {

	var clickedItem = BuyItems.clickedItem;

	console.log('clicked Item is: ', clickedItem);

	$scope.map = {
		center: {
          latitude: clickedItem.location._latitude,
          longitude: clickedItem.location._longitude
      },
      zoom: 16
	}

	$scope.marker = {
		coords : {
			latitude: clickedItem.location._latitude,
			longitude: clickedItem.location._longitude
		},
		idKey: clickedItem.imageId
	}


	// $scope.test = 'hello';
	// console.log('inside forSale controller');

 //  var promise = ItemsForSale.getMyForSaleItems();

 //  promise.then(function(items) {
 //  	console.log(items);
 //  	$scope.items = items;
 //  });

});