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
      				url : 'http://megjc.gov.jm/api/?rest_route=/wp/v2/',
              /**
               * Wordpress API uses integers to represent a category
               * @type {Array}
               */
              categories: [
                {id: 2, name: "news", parent: null},
                {id: 3, name: "latest", parent: {id: 2, name: "news"}},
                {id: 4, name: "featured", parent: { id: 2, name: 'news'}},
                {id: 5, name: "careers", parent: null},
                {id: 6, name: "tenders", parent: null},
                {id: 7, name: "legislation", parent: {id: 11, name: "information-resources"}},
                {id: 8, name: "policy", parent: {id: 11, name: "information-resources"}},
                {id: 9, name: "publication", parent: {id: 11, name: "information-resources"}},
                {id: 10, name: "report", parent: {id: 11, name: "information-resources"}},
                {id: 11, name: "information-resources", parent: null},
                {id: 12, name: "events", parent: null}
              ]
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
