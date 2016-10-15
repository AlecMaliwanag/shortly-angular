angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.links = [];
  // $scope.data.links = JSON.parse(Links.getAll());
  //have a for loop that json parses each object in the array.
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
  console.log($scope.data.links);
});