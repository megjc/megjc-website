(function() {
    'use strict'

    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['$scope', '$location', '$routeParams', '$anchorScroll',
                    'HomeService', 'newsService', 'NgMap', 'pagesService',
                    'wp', 'CONSTANTS']

    /* @ngInject */
    function Home($scope, $location, $routeParams, $anchorScroll,
                  HomeService, newsService, NgMap, pagesService, wp,
                  CONSTANTS) {
        var vm = this
        vm.goTo = goTo
        vm.cancel = cancel
        vm.scroll = scroll
        vm.spinner = true
        activate()
        /**
         * Handles the controller's startup logic
         */
        function activate() {
          if(angular.isDefined($routeParams.url)){
            vm.path = $routeParams.url
          }
          NgMap.getMap().then(function( map ) { })
          getEvents()
          listPostsByCategory()
        }
        /**
         * Get posts by category id
         * @return {[type]} [description]
         */
        function listPostsByCategory() {
          wp
            .listPostsByCategory( [CONSTANTS.categories[0].id,
                                  CONSTANTS.categories[1].id,
                                  CONSTANTS.categories[2].id] )
            .then(function ( posts ) {
              vm.news = posts
              vm.spinner = false
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
        /**
         * Get all posts by category
         * @return {[type]} [description]
         */
        function getEvents() {
          wp.listPostsByCategory( [CONSTANTS.categories[10].id] )
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
