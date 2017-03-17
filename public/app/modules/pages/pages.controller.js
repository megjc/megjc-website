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

        function getPolicies() {
            vm.policies = [
              {title: 'Draft National Forest Management and Conservation Plan (NFMCP)', link: 'nfmcp_draft_jan_2017.pdf'}
            ]
        }

        function getTenders() {
          pagesService.getTenders().then(function (tenders) {
            vm.tenders = tenders
          }).catch(function (error) {
            vm.tenders = []
          })
        }

        function getReports() {
          vm.reports = [
            {title: 'Rural Water Supply Report on Projects Slated for Completion', link: 'rural-water-supply-report-on-projects-slated-for-completion-2016-2017.pdf'}
          ]
        }

        function getPublications() {
          vm.publications = [
            {title: 'Forest News-Partner\'s Edition, Dec. 2016', link: 'forest_news-partners_edition_dec._2016.pdf'}
          ]
        }

        function getSpeeches() {
          pagesService.getSpeeches().then(function (speeches) {
            vm.speeches = speeches
          }).catch(function (error) {
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
