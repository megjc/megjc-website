(function() {
    'use strict'

    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['$scope', '$location', '$routeParams', '$anchorScroll',
                    'HomeService', 'newsService', 'NgMap', 'pagesService',
                    'wpAPIService', 'WP_API']

    /* @ngInject */
    function Home($scope, $location, $routeParams, $anchorScroll,
                  HomeService, newsService, NgMap, pagesService, wpAPIService, WP_API) {
        var vm = this;
        vm.goTo = goTo
        vm.cancel = cancel
        vm.scroll = scroll
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
          getPostsByCategory()
        }
        /**
         * Get posts by category id
         * @return {[type]} [description]
         */
        function getPostsByCategory() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[0].id, WP_API.categories[1].id, WP_API.categories[2].id] )
            .then(function ( posts ) {
            vm.news = posts
          }).catch(function ( error ) {
            vm.news = []
          })
        }
        /**
         * Changes the current page's url
         * @param  string path name of path
         * @return {[type]}      [description]
         */
        function goTo( path ){
          if(vm.path.indexOf('http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm') > -1){
            window.location = 'http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm?&page=accessable&institution=13799&type=2&language=1'
            return
          }
          window.location = path
        }
        /**
         * Returns the user to the home page
         * @return {[type]} [description]
         */
        function cancel() {
          $location.search('url', null)
          $location.path('/')
        }

        function getEvents() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[10].id] )
            .then(function ( events ) {
              vm.events = events
          }).catch(function ( error ) {
              vm.events = []
          })
        }

        function scroll() {
          $location.hash('top')
          $location.path('/')
          $anchorScroll()
        }

    }
})();
