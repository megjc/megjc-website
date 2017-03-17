(function() {
    'use strict'

    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['$scope', '$location', '$routeParams', '$anchorScroll',
                    'HomeService', 'newsService', 'NgMap', 'pagesService',
                    'wpAPIService']

    /* @ngInject */
    function Home($scope, $location, $routeParams, $anchorScroll,
                  HomeService, newsService, NgMap, pagesService, wpAPIService) {
        var vm = this;
        vm.goTo = goTo
        vm.cancel = cancel
        vm.scroll = scroll
        //vm.default_categories = [2,3]
        /**
         * Wordpress API uses integers to represent a category
         * 2 - featured category
         * 3 - latest-news category
         * @type {Array}
         */
        var _default_categories = [2, 3]

        activate()
        /**
         * Handles the controller's startup logic
         */
        function activate() {
          if($routeParams.url){
            vm.path = $routeParams.url
          }
          NgMap.getMap().then(function( map ) { })
          getEvents()

          wpAPIService
            .getPostsByCategory( _default_categories )
            .then(function ( posts ) {
            vm.news = posts
          }).catch(function ( error ) {
            vm.news = []
          })
        }

        function goTo( path ){
          if(vm.path.indexOf('http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm') > -1){
            window.location = 'http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm?&page=accessable&institution=13799&type=2&language=1'
            return
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

        function scroll() {
          console.log('scroll')
          $location.hash('top')
          $location.path('/')
          $anchorScroll()
        }

    }
})();
