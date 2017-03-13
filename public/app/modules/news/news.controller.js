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
          if($routeParams.slug){
            newsService.getArticle().then(function (article) {
              console.log(article)
            }).catch(function ( error ) {
              vm.article = {}
            })
          }
          vm.articles = newsService.getArticles()
        }
    }
})();
