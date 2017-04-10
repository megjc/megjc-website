(function() {
    'use strict'

    angular
        .module('news')
        .controller('NewsCtrl', NewsCtrl);

   NewsCtrl.$inject = ['$routeParams','wpAPIService', 'WP_API']
    /* @ngInject */
    function NewsCtrl($routeParams, wpAPIService, WP_API) {
        var vm = this
        vm.spinner = true
        vm.loadComplete = false
        activate()
        /**
         * Handles controller start up logic
         * @return {[type]} [description]
         */
        function activate() {
          if(angular.isDefined($routeParams.slug)){
            getPost()
          }else{
            getPosts()
          }
        }
        /**
         * Gets all posts by category(s)
         * @return {[type]} [description]
         */
        function getPosts(){
          wpAPIService
          .getPostsByCategory([WP_API.categories[0].id])
          .then(function(posts){
            vm.articles = posts
            vm.spinner = false
          })
        }
        /**
         * Get a post by slug
         * @return {[type]} [description]
         */
        function getPost(){
          wpAPIService
            .getPostBySlug($routeParams.slug)
            .then(function (post) {
              vm.post = post
              vm.spinner = false
              vm.loadComplete = true
            }).catch(function (erorr) {
              vm.post = {}
            })

        }
    }
})();
