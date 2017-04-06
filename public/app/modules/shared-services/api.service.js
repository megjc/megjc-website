(function() {
    'use strict'

    angular
        .module('shared-services',[])
        .service('wpAPIService', wpAPIService);

    wpAPIService.$inject = ['$http', 'WP_API']

    /* @ngInject */
    function wpAPIService($http, WP_API) {
        var _default_params = '&_embed=1',
            service = {
              getPostsByCategory:getPostsByCategory,
              getPostById:getPostById,
              getPostBySlug:getPostBySlug
            }

        return service
        /**
         * Get a post by id
         * @param  {[type]} id [description]
         * @return {[type]}    [description]
         */
        function getPostById( id ) {
          var absUrl = WP_API.url + 'posts/' + id + _default_params
          return $http.get(absUrl).then(function (res) {
            return res.data
          }).catch(function (res) {
            return res
          })
        }
        /**
         * Get a post by category.
         * @param  {[type]} categories Array of categories
         * @return {[type]}            [description]
         */
        function getPostsByCategory(categories) {
          var i = 0,
              endpoint = 'posts&status=publish' + _default_params

          for(; i < categories.length; i++){
            endpoint = endpoint + '&categories=' + categories[i]
          }
          var absUrl = WP_API.url + endpoint

          return $http.get(absUrl).then(function(res){
            return res.data
          }).catch(function(res){
            return res
          })
        }
        /**
         * Get a post by slug
         * @param  {[type]} slug [description]
         * @return {[type]}      [description]
         */
        function getPostBySlug( slug ) {
          var absUrl = WP_API.url + 'posts&slug=' + slug + _default_params
          return $http.get(absUrl).then(function (res) {
                return res.data[0]
              }).catch(function (res) {
                 return res
              })
        }
    }
})();
