angular.module('bidlist.services', [])

.factory('BidList',  function($q) { 

    var instance = {};

    instance.getBidList = function() {
        // use a promise to return items
        var deferred = $q.defer();
        var items = [];

        // new parse query on Items table
        var query = new Parse.Query('Items');

        // query.select("userId", "imgURL", "price", "description", "objectID", "location");

        query.equalTo("buyerId", Parse.User.current().id);

        query.find().then(function(results) {
            results.forEach(function(result) {
                items.push(result.attributes);
            });
            deferred.resolve(items);
        });
        return deferred.promise;
    }

    return instance;


});
