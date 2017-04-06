(function(){
    'use strict'
    angular
      .module('shared-filters',[])
      .filter('sanitize', sanitize)
      .filter('url', url);
    /**
     * Filter used to whitelist content.
     * The content attribute of WP posts contain
     * html tags. This service sanitizes said tags for display.
     * @param $sce
     * @returns {Function}
     */
    function sanitize($sce){
        return function(text){
            return $sce.trustAsHtml(text)
        }
    }
    /**
     * Filter used to extract url from Wordpress post.
     * @return {[type]} [description]
     */
    function url(){
      return function(text){
        var temp = text.slice(12).split("\">")
        return temp[0]
      }
    }
})();
