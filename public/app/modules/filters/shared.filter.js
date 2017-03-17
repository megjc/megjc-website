(function(){
    'use strict'
    angular.module('shared-filters',[]).filter('sanitize', sanitize);
    /**
     * Filter used to whitelist content.
     * The content attribute of WP posts contain
     * html tags. This service sanitizes said tags for display.
     * @param $sce
     * @returns {Function}
     */
    function sanitize($sce){
        return function(text){
            return $sce.trustAsHtml(text);
        }
    }
})();
