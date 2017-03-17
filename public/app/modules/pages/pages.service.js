(function() {
    'use strict';

    angular
        .module('pages')
        .service('pagesService', pagesService);

    pagesService.$inject = ['$http'];

    /* @ngInject */
    function pagesService($http) {
        var service = {
          getCareers: getCareers,
          getDivisions: getDivisions,
          getTenders: getTenders,
          getLaws: getLaws,
          getEvents: getEvents,
          getSpeeches: getSpeeches
        }

        return service

        function getCareers() {
          return $http.get('/data/json/careers.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }


        function getDivisions() {
          return $http.get('/data/json/divisions.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }

        function getTenders() {
          return $http.get('/data/json/tenders.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }

        function getLaws() {
          return $http.get('/data/json/laws.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }

        function getEvents() {
          return $http.get('/data/json/events.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }

        function getSpeeches() {
          return $http.get('/data/json/speeches.json')
                      .then(handleSuccess)
                      .catch(handlError)
          function handleSuccess( res ) {
            return res.data
          }

          function handlError( error ) {
            return error
          }
        }
    }
})();
