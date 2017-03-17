(function() {
    'use strict';
    angular
    .module('pages', [])
    .config(config);

    function config($routeProvider) {
      $routeProvider
      .when('/portfolio-areas/hope', {
        templateUrl: 'public/app/modules/pages/tpl/portfolios/hope.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/perb', {
        templateUrl: 'public/app/modules/pages/tpl/portfolios/perb.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/harmonization-ltd',{
        templateUrl: 'public/app/modules/pages/tpl/portfolios/harmonization-ltd.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/jifsa', {
        templateUrl: 'public/app/modules/pages/tpl/portfolios/jifsa.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/portfolio-areas/logistics-hub',{
        templateUrl: 'public/app/modules/pages/tpl/portfolios/logistics-hub.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/divisions',{
        templateUrl: 'public/app/modules/pages/tpl/division-listing.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/divisions/rent-services-unit',{
        templateUrl: 'public/app/modules/pages/tpl/divisions/rent-services-unit.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/resources/legislations-and-regulations',{
        templateUrl: 'public/app/modules/pages/tpl/legislations-and-regulations.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/resources/policies',{
        templateUrl: 'public/app/modules/pages/tpl/policies.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/resources/publications',{
        templateUrl: 'public/app/modules/pages/tpl/publications.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/resources/reports',{
        templateUrl: 'public/app/modules/pages/tpl/reports.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/resources/speeches-transcripts',{
        templateUrl: 'public/app/modules/pages/tpl/speeches.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/tenders',{
        templateUrl: 'public/app/modules/pages/tpl/tenders.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/careers',{
        templateUrl: 'public/app/modules/pages/tpl/careers.tpl.html',
        controller: 'PagesCtrl as vm'
      }).when('/events',{
        templateUrl: 'public/app/modules/pages/tpl/events.tpl.html',
        controller: 'PagesCtrl as vm'
      }).otherwise({redirectTo: '/'})
    }
})();
