(function() {
    'use strict';

    angular
    .module('news', [])
    .config(config);

    function config($routeProvider) {
      $routeProvider.when('/lastest-news',{
        templateUrl: 'public/app/modules/news/tpl/news-list.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/lastest-news/quality-of-life-linked-to-the-quality-of-the-natural-environment',{
        templateUrl: 'public/app/modules/news/tpl/news_two.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/lastest-news/housing-minister-signs-billion-dollar-housing-development-contract-with-wihcon',{
        templateUrl: 'public/app/modules/news/tpl/news_one.tpl.html',
        controller: 'NewsCtrl as vm'
      }).when('/lastest-news/150-nwc-personnel-to-be-trained',{
        templateUrl: 'public/app/modules/news/tpl/news_three.tpl.html',
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
