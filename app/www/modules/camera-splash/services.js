angular.module('camerasplash.services', [])

.factory('Camera', ['$q', function($q) {
  // default picUrl
  var picUrl = "data:image/jpeg;base64,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";
  
  // this function uses promises so that it can be used in the controller more cleanly
  var getPicture = function(options) {
    var q = $q.defer();

    navigator.camera.getPicture(
      function(result) {
        q.resolve(result);
      }, 
      function(err) {
        q.reject(err);
      }, 
      {
      // set on a low quality for now so not to kill memory as we're using base64 images
      'quality': 40, 
      // DATA_URL = Base64 image. There are other settings, specifically FILE_URI,
      // which will just list the directory for where the image is saved
      'destinationType': Camera.DestinationType.DATA_URL, 
      // this is important or you'll have inconsistent landscape/portrait shots
      'correctOrientation': true
    });

    return q.promise;
  };

  return {
    picUrl: picUrl,
    getPicture: getPicture
  };
}])