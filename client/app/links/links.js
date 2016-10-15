angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Auth, Links) {
  // Your code here
  if (Auth.isAuth()) {
    $scope.data = {};
    $scope.data.links = [];
    // $scope.data.links = JSON.parse(Links.getAll());
    //have a for loop that json parses each object in the array.

    // Links.getAll().then(function(data) {
    //   $scope.data.links = data.sort(function(a, b) {
    //     return b.visits - a.visits;
    //   });
    // });

    Links.getAll().then(function(data) {
      $scope.data.links = data;
    });

  } else {
    $location.path('/signup');
  }

  $scope.signOut = function() {
    Auth.signout();
  };
});