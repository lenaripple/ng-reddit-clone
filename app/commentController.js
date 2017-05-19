angular.module('comments')
  .controller('commentController',
    function() {
      const vm = this
      vm.$onInit = function () {
      vm.comments = []
      }
      vm.addComment = function(post){
        post.comments.push(vm.post['comments'])
        delete vm.post
      }
      // vm.deleteComment = function (e, comment) {
      //   e.preventDefault()
      //   vm.comments.splice(vm.comments.indexOf(comment), 1)
      // }
  })
