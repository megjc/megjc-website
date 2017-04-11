/**
 * Wordpress API Service
 * This library interacts with the Wordpress API
 * to fetch Wordpress resources for example posts
 * and categories.
 * @type {Array}
 */
(function() {
    'use strict'

    angular
        .module('shared-services',[])
        .service('wp', wp);

    wp.$inject = ['$http', 'CONSTANTS']
    /* @ngInject */
    function wp($http, CONSTANTS) {
        var service = {
              listPostsByCategory:listPostsByCategory,
              retrievePostById:retrievePostById,
              retrievePostBySlug:retrievePostBySlug
            }

        return service
        /**
         * Get a post by id
         * @param  {[type]} id [description]
         * @return {[type]}    [description]
         */
        function retrievePostById( id ) {
          var absUrl = CONSTANTS.url + 'posts/' + id + CONSTANTS.params.embed
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
        function listPostsByCategory(categories) {
          var i = 0,
              endpoint = 'posts&status=publish' + CONSTANTS.params.embed

          for(; i < categories.length; i++){
            endpoint = endpoint + '&categories=' + categories[i]
          }
          var absUrl = CONSTANTS.url + endpoint

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
        function retrievePostBySlug( slug ) {
          var absUrl = CONSTANTS.url + 'posts&slug=' + slug + CONSTANTS.params.embed
          return $http.get(absUrl).then(function (res) {
                return res.data[0]
              }).catch(function (res) {
                 return res
              })
        }
    }
})();
