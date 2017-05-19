angular.module('app')
  .controller('addPostController',
    function() {
      const vm = this
      const votes = 0
      vm.$onInit = function () {
      vm.posts = [
        {title:"Nice lil waterfall", author:"fells4life", image: "http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a-large.jpg", description: "friendly lil waterfall buddy just hangin out in good ol' Kirkjufell, Iceland", date: "Fri May 19 2017 11:01:08 GMT-0600 (MDT)", votes: 12, comments:['cool post', 'whoa']},
        {title:"PENGUIN TEETH", author:"pngnz", image: "http://i.dailymail.co.uk/i/pix/2015/12/22/16/2F91F81A00000578-3370645-Snack_attack_A_member_of_National_Geographic_s_Your_Shot_communi-a-76_1450803466204.jpg", description: "WHAT IS THIS HELLBEAST?! did you know penguins had teeth like this??", date: "Fri May 19 2017 08:01:08 GMT-0600 (MDT)", votes: 14, comments: ['check out this comment so sick']},
        {title:"Angular docs", author:"ngmaster", image: "https://angularjs.org/img/angularjs-for-header-only.svg", description: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.", date: "Wed May 02 2017 11:01:08 GMT-0600 (MDT)", votes: 8, comments: []},
        {title:"aww", author:"hogs", image: "http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-13.jpg", description: "Hedgehogs are so cute", date: "Fri May 19 2017 03:01:08 GMT-0600 (MDT)", votes: 18, comments: []},
        {title:"what even", author:"bearz", image: "http://www.nationalgeographic.com/content/dam/photography/rights-exempt/Best-of-2016/teton-grizzly-feeding.adapt.1190.1.jpg", description: "Is this the most metal this you've ever seen?!", date: "Mon May 15 2017 11:01:08 GMT-0600 (MDT)", votes: 22, comments: []},
        {title:"Grand Prismatic", author:"rawks", image: "http://www.nationalgeographic.com/content/dam/photography/rights-exempt/Best-of-2016/prismatic-spring.adapt.1190.1.jpg", description: "This is super cool wow omg amazing", date: "Fri May 19 2017 09:01:08 GMT-0600 (MDT)", votes: 16, comments: []},
        {title:"Canyon country", author:"bearsears", image: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/09/canyonlands2-940x528.jpg", description: "Canyonlands is literally the most beautiful place ever", date: "Wed May 17 2017 11:01:08 GMT-0600 (MDT)", votes: 8, comments: []}
      ]
  }
    vm.addPost = function(){
      vm.post.date = new Date()
      console.log(vm.post.date);
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
      post.comments.push(vm.post['comments'])
      delete vm.post
    }
  })
