angular.module('settings', ['settings.services'])

.controller('SettingsController', function($scope, Settings, Auth) {
  $scope.logoutUser = function() {
    Auth.logoutUser();
  };

  $scope.loadPage = function(pageName){
    console.log("Changing to page: " +pageName );
  };
});