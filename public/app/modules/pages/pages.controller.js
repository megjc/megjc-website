(function() {
    'use strict';

    angular
        .module('pages')
        .controller('PagesCtrl', PagesCtrl);

    PagesCtrl.$inject = ['$location', '$window', 'pagesService', 'wpAPIService', 'WP_API']

    /* @ngInject */
    function PagesCtrl($location, $window, pagesService, wpAPIService, WP_API) {
        var vm = this
        vm.goTo = goTo

        activate()

        function activate() {
          getDivisions()
          getPolicies()
          getTenders()
          getReports()
          getPublications()
          getSpeeches()
          getCareers()
          getLaws()
          getEvents()
        }

        function goTo( path ) {
          $window.open( path )
        }
        /**
         * Get all published events
         * @return {[type]} [description]
         */
        function getEvents() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[10].id] )
            .then(function ( events ) {
              vm.events = events
          }).catch(function ( error ) {
              vm.events = []
          })
        }
        /**
         * Get all published policies
         * @return {[type]} [description]
         */
        function getPolicies() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[6].id] )
            .then(function ( posts ) {
              vm.policies = posts
          }).catch(function ( error ) {
              vm.policies = []
          })
        }

        function getTenders() {
          pagesService.getTenders().then(function (tenders) {
            vm.tenders = tenders
          }).catch(function (error) {
            vm.tenders = []
          })
        }
        /**
         * Get all posts by category report
         * @return {[type]} [description]
         */
        function getReports() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[8].id] )
            .then(function ( posts ) {
              vm.reports = posts
          }).catch(function ( error ) {
              vm.reports = []
          })
        }

        function getPublications() {
          vm.publications = [
            {title: 'World Water Day March 22, 2017', link: 'world_water_day_2017_publication.pdf'},
            {title: 'Forest News-Partner\'s Edition, Dec. 2016', link: 'forest_news-partners_edition_dec._2016.pdf'},
            {title: 'Public Private Partnership (Housing) Prospectus', link: 'public_private_partnership_prospectus.pdf'}
          ]
        }
        /**
         * Get all posts by category speech
         * @return {[type]} [description]
         */
        function getSpeeches() {
          wpAPIService
            .getPostsByCategory( [WP_API.categories[11].id] )
            .then(function ( posts ) {
              vm.speeches = posts
          }).catch(function ( error ) {
              vm.speeches = []
          })
        }

        function getCareers() {
          pagesService.getCareers().then(function (careers) {
              vm.careers = careers
          }).catch(function (error) {
             vm.careers = []
          })
        }

        function getDivisions() {
          pagesService.getDivisions().then(function (divisions) {
            vm.divisions = divisions
          }).catch(function (error) {
            vm.divisions = []
          })
        }

        function getLaws() {
          pagesService.getLaws().then(function (laws) {
            vm.laws = laws
          }).catch(function (error) {
            vm.laws = []
          })
        }
    }
})();
