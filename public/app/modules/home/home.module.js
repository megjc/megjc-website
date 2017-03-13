(function() {
    'use strict';

    angular
        .module('home', ['ngMap'])
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
          }).when('/about-us',{
            templateUrl: 'public/app/modules/home/tpl/about.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt',{
            templateUrl: 'public/app/modules/home/tpl/exec-mgmt.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/hon-andrew-holness',{
            templateUrl: 'public/app/modules/home/tpl/profiles/pm.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/hon-daryl-vaz',{
            templateUrl: 'public/app/modules/home/tpl/profiles/dv.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/hon-horace-chang',{
            templateUrl: 'public/app/modules/home/tpl/profiles/hc.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/doreen-prendergast',{
            templateUrl: 'public/app/modules/home/tpl/profiles/dp.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/sharon-crooks',{
            templateUrl: 'public/app/modules/home/tpl/profiles/sc.tpl.html',
            controller: 'Home as vm'
          }).when('/about-us/exec-mgmt/profiles/oral-khan',{
            templateUrl: 'public/app/modules/home/tpl/profiles/ok.tpl.html',
            controller: 'Home as vm'
          }).otherwise({redirectTo: '/'});
        }
})();
