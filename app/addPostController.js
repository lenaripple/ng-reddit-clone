angular.module('app')
  .controller('addPostController',
    function() {
      const vm = this
      const votes = 0
      vm.$onInit = function () {
      vm.posts = [
        {title:"Nice", author:"lirip", image: "http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a-large.jpg", description: "Kirkjufell, Iceland", date: '5/17/17 2:40 PM', votes: 12, comments:[]},
        {title:"Cool post", author:"other", image: "https://apod.nasa.gov/apod/image/1505/AuroraNorway_Richardsen_1080.jpg", description: "This is super cool wow omg amazing", date: '5/17/17 2:21 PM', votes: 4, comments: []}
      ]
  }
  vm.addPost = function(){
    vm.post.date = Date.now()
    vm.post.votes = 0
    vm.post.comments = []
    vm.posts.push(vm.post)
    delete vm.post
  }
  vm.deletePost = function (e, post) {
    e.preventDefault()
    vm.posts.splice(vm.posts.indexOf(post), 1)
  }
  vm.changeVotes = function(post, changeVal) {
    post.votes += changeVal;
    vm.votes
    }
  })
