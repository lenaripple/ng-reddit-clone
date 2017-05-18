angular.module('app', [])
  .component('app', {
    controller: 'addPostController',
    templateUrl: './templates/postTemplate.html'
  })
  .component('comments', {
    controller: 'commentController',
    templateUrl: './templates/commentTemplate.html'

  })
