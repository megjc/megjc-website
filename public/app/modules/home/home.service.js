(function() {
    'use strict';

    angular
        .module('home')
        .service('HomeService', HomeService);

    HomeService.$inject = ['$location', '$timeout'];
    /* @ngInject */
    function HomeService($location, $timeout) {
        var service = {
          goTo: goTo
        }

        return service

        function goTo( path ) {
          if(angular.isString(path)){
            if(/^(http|https)/.test(path)){
              window.location = path
            }
          }
        }

    }
})();
