(function() {
    'use strict';

    angular
        .module('home', [])
        .config(config);
        /**
         * [config description]
         * @return {[type]} [description]
         */
        function config($routeProvider) {
          $routeProvider.when('/',{
            templateUrl: 'public/app/modules/home/tpl/home.tpl.html',
            controller: 'Home as vm'
          }).when('/redirect',{
            templateUrl: 'public/app/modules/home/tpl/redirect.tpl.html',
            controller: 'Home as vm'
          }).otherwise({redirectTo: '/'});
        }
})();
