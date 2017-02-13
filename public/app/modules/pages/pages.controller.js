(function() {
    'use strict';

    angular
        .module('pages')
        .controller('PagesCtrl', PagesCtrl);

    //PagesCtrl.$inject = ['dependencies'];

    /* @ngInject */
    function PagesCtrl() {
        var vm = this;

        activate();

        function activate() { }
    }
})();
