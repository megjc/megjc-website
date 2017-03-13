(function() {
    'use strict';

    angular
    .module('news', [])
    .config(config);

    function config($routeProvider) {
      $routeProvider.when('/lastest-news',{
        templateUrl: 'public/app/modules/news/tpl/news-list.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/lastest-news/:slug',{
        templateUrl: 'public/app/modules/news/tpl/news.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/focus-area-news/:slug',{
        templateUrl: 'public/app/modules/news/tpl/focus-area-news.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/focus-area-news',{
        templateUrl: 'public/app/modules/news/tpl/focus-news-list.tpl.html',
        controller: 'NewsCtrl as vm'
      });
    }
})();
