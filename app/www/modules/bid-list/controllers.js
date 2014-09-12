angular.module('bidlist', ['bidlist.services'])

.controller('BidListController', function($scope, BidList, $state) {

  var promise = BidList.getBidList();

  promise.then(function(items) {
    console.log(items);
    $scope.items = items;
  });

});


