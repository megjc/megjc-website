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
            'pages'
        ]).config(config);
    /**
     *
     * @param  {[type]} $routeProvider [description]
     * @return {[type]}                [description]
     */
    function config($routeProvider, $locationProvider) {
      //$locationProvider.html5Mode({enabled:true, requireBase: false})
      $routeProvider.otherwise({redirectTo: '/'})
    }
})();
