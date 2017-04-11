(function() {
    'use strict';

    angular
        .module('pages')
        .controller('PagesCtrl', PagesCtrl);

    PagesCtrl.$inject = ['$location', '$window','pagesService', 'wp', 'CONSTANTS']

    /* @ngInject */
    function PagesCtrl($location, $window, pagesService, wp, CONSTANTS) {
        var vm = this
        vm.goTo = goTo
        vm.spinner = true
        activate()

        function activate() {
          routeRequests()
        }
        /**
         * [routeRequests description]
         * @return {[type]} [description]
         */
        function routeRequests(){

          switch (pagesService.getPageName($location.path())) {
            case 'speeches-transcripts': getSpeeches()
              break;
            case 'policies': getPolicies()
              break;
            case 'reports': getReports()
              break;
            case 'divisions': getDivisions()
              break;
            case 'tenders': getTenders()
              break;
            case 'publications': getPublications()
              break;
            case 'careers': getCareers()
                break;
            case 'legislations-and-regulations': getLaws()
                break;
            case 'events': getEvents()
                break;
            default:
          }
        }

        function _stopSpinner(){
          vm.spinner = !vm.spinner
        }

        function goTo( path ) {
          $window.open( path )
        }
        /**
         * Get all published events
         * @return {[type]} [description]
         */
        function getEvents() {
          wp.listPostsByCategory( [CONSTANTS.categories[10].id] )
            .then(function ( events ) {
              vm.events = events
              _stopSpinner()
          }).catch(function ( error ) {
              vm.events = []
          })
        }
        /**
         * Get all published policies
         * @return {[type]} [description]
         */
        function getPolicies() {
          wp.listPostsByCategory( [CONSTANTS.categories[6].id] )
            .then(function ( posts ) {
              vm.policies = posts
              _stopSpinner()
          }).catch(function ( error ) {
              vm.policies = []
          })
        }

        function getTenders() {
          pagesService.getTenders().then(function (tenders) {
            vm.tenders = tenders
            _stopSpinner()
          }).catch(function (error) {
            vm.tenders = []
          })
        }
        /**
         * Get all posts by category report
         * @return {[type]} [description]
         */
        function getReports() {
          wp.listPostsByCategory( [CONSTANTS.categories[8].id] )
            .then(function ( posts ) {
              vm.reports = posts
              _stopSpinner()
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
          wp.listPostsByCategory( [CONSTANTS.categories[11].id] )
            .then(function ( posts ) {
              vm.speeches = posts
              _stopSpinner()
          }).catch(function ( error ) {
              vm.speeches = []
          })
        }

        function getCareers() {
          pagesService.getCareers().then(function (careers) {
              vm.careers = careers
              _stopSpinner()
          }).catch(function (error) {
             vm.careers = []
          })
        }

        function getDivisions() {
          pagesService.getDivisions().then(function (divisions) {
            vm.divisions = divisions
            _stopSpinner()
          }).catch(function (error) {
            vm.divisions = []
          })
        }

        function getLaws() {
          pagesService.getLaws().then(function (laws) {
            vm.laws = laws
            _stopSpinner()
          }).catch(function (error) {
            vm.laws = []
          })
        }
    }
})();
