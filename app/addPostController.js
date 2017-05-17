angular.module('app')
  .controller('addPostController',
    function() {
      const vm = this
      vm.$onInit = function () {
      vm.posts = [
        {title:"Nice", author:"lirip", image: "http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a-large.jpg", description: "Kirkjufell, Iceland"},
        {title:"Cool post", author:"other", image: "", description: "This is super cool wow omg amazing"}
      ]
  }
  vm.addPost = function(){
    vm.posts.push(vm.post)
    delete vm.post
  }
  vm.deletePost = function (e, post) {
    e.preventDefault()
    vm.posts.splice(vm.posts.indexOf(post), 1)
  }
  })
