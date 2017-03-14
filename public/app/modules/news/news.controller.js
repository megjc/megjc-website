(function() {
    'use strict';

    angular
        .module('news')
        .controller('NewsCtrl', NewsCtrl);

   NewsCtrl.$inject = ['$routeParams', 'newsService']
    /* @ngInject */
    function NewsCtrl($routeParams, newsService) {
        var vm = this

        activate()

        function activate() {
          vm.articles = newsService.getArticles()
        }
    }
})();
