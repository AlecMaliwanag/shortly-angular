angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  // Your code here
  $scope.addLink = function(link) {
    Links.addOne(link);
  };
});
