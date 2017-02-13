(function() {
    'use strict';
    angular
    .module('pages', [])
    .config(config);

    function config($routeProvider) {
      $routeProvider
      .when('/portfolio-areas/hope', {
        templateUrl: 'public/app/modules/pages/tpl/hope.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/climate-change',{
        templateUrl: 'public/app/modules/pages/tpl/climate-change.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/rent-board',{
        templateUrl:'public/app/modules/pages/tpl/rent-board.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/perb', {
        templateUrl: 'public/app/modules/pages/tpl/perb.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/harmonization-ltd',{
        templateUrl: 'public/app/modules/pages/tpl/harmonization-ltd.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/jifsa', {
        templateUrl: 'public/app/modules/pages/tpl/jifsa.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/logistics-hub',{
        templateUrl: 'public/app/modules/pages/tpl/logistics-hub.tpl.html',
        controller: 'PagesCtrl as vm'
      }).otherwise({redirectTo: '/'})
    }
})();
