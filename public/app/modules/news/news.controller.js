(function() {
    'use strict'

    angular
        .module('news')
        .controller('NewsCtrl', NewsCtrl);

   NewsCtrl.$inject = ['$routeParams','wpAPIService']
    /* @ngInject */
    function NewsCtrl($routeParams, wpAPIService) {
        var vm = this

        activate()
        /**
         * Handles controller start up logic
         * @return {[type]} [description]
         */
        function activate() {
          wpAPIService
            .getPostBySlug($routeParams.slug)
            .then(function (post) {
              vm.post = post
            }).catch(function (erorr) {
              vm.post = {}
            })
        }
    }
})();
