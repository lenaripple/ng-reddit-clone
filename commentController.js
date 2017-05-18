angular.module('comments')
  .controller('commentController',
    function() {
      const vm = this
      vm.$onInit = function () {
      vm.comments = []
      }
      vm.addComment = function(){
        vm.comments.push(vm.comment)
        delete vm.comment
      }
      vm.deleteComment = function (e, comment) {
        e.preventDefault()
        vm.comments.splice(vm.comments.indexOf(comment), 1)
      }
  })
