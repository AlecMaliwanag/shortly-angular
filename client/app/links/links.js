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
})

.directive('shortenedLink', function() {
  scope: {
    item: '=shortenedLink';
  }
  return {
    template: 'Hello <div class="info link">' +
      '<img src="/assets/redirect_icon.png"/>' +
      '<div class="visits"><span class="count">{{link.visits}}</span>Visits</div>' +
      '<div class="title">{{link.title}}</div>' +
      '<div class="original">{{link.dataurl}}</div>' +
      '<a href="{{link.baseUrl}}/{{link.code}}">{{link.baseUrl}}/{{link.code}}</a>'+ 
      '</div>'
  };
});