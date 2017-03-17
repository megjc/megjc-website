/**
 * Main module for application.
 * @author Tremaine Buchanan tremaine.buchanan@megjc.gov.jm
 */
(function() {
    'use strict';

    angular
        .module('megjc', [
            'ngRoute',
            'ngResource',
            'home',
            'nav',
            'pages',
            'news',
            'shared-services',
            'shared-filters'
        ]).config(config)
          .run(ga)
          .constant("WP_API", {
      				url : '/api/wordpress/?rest_route=/wp/v2/'
      		});
    /**
     *
     * @param  {[type]} $routeProvider [description]
     * @return {[type]}                [description]
     */
    function config($routeProvider, $locationProvider) {
      $routeProvider.otherwise({redirectTo: '/'})
    }
    /**
     * Tracks each page view through
     * google analytics.
     * @param $rootScope
     * @param $location
     * @param $window
     */
    function ga($rootScope, $location, $window){
        $rootScope.$on('$routeChangeStart', function(event, current){
            var page = $location.absUrl();
            $window.ga('send', 'pageview', {'page': page});
        });
    }
})();
