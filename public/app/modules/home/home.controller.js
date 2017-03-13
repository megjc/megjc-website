(function() {
    'use strict';

    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['$scope', '$location', '$routeParams','HomeService', 'newsService', 'NgMap', 'pagesService'];

    /* @ngInject */
    function Home($scope, $location, $routeParams, HomeService, newsService, NgMap, pagesService) {
        var vm = this;
        vm.goTo = goTo
        vm.cancel = cancel
        activate()

        function activate() {
          if($routeParams.url){
            vm.path = $routeParams.url
          }
          NgMap.getMap().then(function(map) { })
          getEvents()
          getArticles()
        }

        function goTo( path ){
          if(vm.path.indexOf('http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm') > -1){
            window.location = 'http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm?&page=accessable&institution=13799&type=2&language=1'
          }
          window.location = path
        }

        function cancel() {
          $location.search('url', null)
          $location.path('/')
        }

        function getEvents() {
          pagesService.getEvents().then(function (events) {
            vm.events = events
          }).catch(function (error) {
            vm.events = []
          })
        }

        function getArticles() {
          newsService.getArticles().then(function ( articles ) {
            vm.latest_news = articles
          }).catch(function ( error ) {
            vm.articles = articles
          })
        }

    }
})();
