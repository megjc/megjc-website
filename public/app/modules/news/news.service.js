(function() {
    'use strict';

    angular
        .module('news')
        .service('newsService', newsService);

    newsService.$inject = ['$http'];

    /* @ngInject */
    function newsService($http) {
        var service = {
          getArticles: getArticles,
          getArticle: getArticle
        }
        return service

        function getArticles() {
          return $http.get('/data/json/news.json')
                      .then(handleSuccess)
                      .catch(handleError)

          function handleSuccess( res ) {
            return res.data
          }

          function handleError( error ) {
            return error
          }
        }

        function getArticle() {
          return $http.get('/data/json/news.json').then(handleSuccess).catch(handleError)

          function handleSuccess( res ) {
            return res.data
          }
          function handleError( error ) {
            return error
          }
        }
    }
})();
