angular.module('app')
  .controller('voteController',
    function() {
      const vm = this
      const votes = 0
      vm.$onInit = function () {
        vm.changeVotes = function(post, changeVal) {
          console.log('clicked');
          post.votes += changeVal;
        }
