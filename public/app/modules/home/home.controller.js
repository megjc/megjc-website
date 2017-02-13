(function() {
    'use strict';

    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['$location', '$routeParams','HomeService'];

    /* @ngInject */
    function Home($location, $routeParams, HomeService) {
        var vm = this;
        vm.goTo = goTo
        vm.cancel = cancel
        activate();

        function activate() {
          if($routeParams.url){
            vm.path = $routeParams.url
          }
        }

        function goTo( path ){
          window.location = path
        }

        function cancel() {
          $location.search('url', null)
          $location.path('/')
        }

    }
})();
