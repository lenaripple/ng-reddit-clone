angular.module('app')
  .controller('addPostController',
    function() {
      const vm = this
      const votes = 0
      vm.$onInit = function () {
      vm.posts = [
        {title:"Nice lil waterfall", author:"fells4life", image: "http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a-large.jpg", description: "friendly lil waterfall buddy just hangin out in good ol' Kirkjufell, Iceland", date: 1495231260710, votes: 12, comments:[{text:'cool post'}, {text:'whoa'}]},
        {title:"PENGUIN TEETH", author:"pngnz", image: "http://i.dailymail.co.uk/i/pix/2015/12/22/16/2F91F81A00000578-3370645-Snack_attack_A_member_of_National_Geographic_s_Your_Shot_communi-a-76_1450803466204.jpg", description: "WHAT IS THIS HELLBEAST?! did you know penguins had teeth like this??", date: 1495231260710, votes: 14, comments: ['check out this comment so sick']},
        {title:"Angular docs", author:"ngmaster", image: "https://angularjs.org/img/angularjs-for-header-only.svg", description: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.", date: 1495231260710, votes: 8, comments: []},
        {title:"aww", author:"hogs", image: "http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-13.jpg", description: "Hedgehogs are so cute", date: 1495231260710, votes: 18, comments: []},
        {title:"what even", author:"bearz", image: "http://www.nationalgeographic.com/content/dam/photography/rights-exempt/Best-of-2016/teton-grizzly-feeding.adapt.1190.1.jpg", description: "Is this the most metal this you've ever seen?!", date: 1495231260710, votes: 22, comments: []},
        {title:"Grand Prismatic", author:"rawks", image: "http://www.nationalgeographic.com/content/dam/photography/rights-exempt/Best-of-2016/prismatic-spring.adapt.1190.1.jpg", description: "This is super cool wow omg amazing", date: 1495231260710, votes: 16, comments: []},
        {title:"Canyon country", author:"bearsears", image: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/09/canyonlands2-940x528.jpg", description: "Canyonlands is literally the most beautiful place ever", date: 1495231260710, votes: 8, comments: []}
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
    vm.downVote = function(post) {
      if (post.votes>=1){
      post.votes--
      }
    }
    vm.upVote = function(post) {
      post.votes++
    }
    vm.addComment = function(post){
      post.comments.push(vm.newComment)
      delete vm.newComment
    }
  })
