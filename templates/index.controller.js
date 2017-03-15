(function () {
    'use strict';

    angular.module('app')
        .controller('IndexController', Controller);

    function Controller($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function login() {
            vm.loading = true;
            //console.log(vm.loading);
            //console.log(response);
            AuthenticationService.Login(vm.username, function (result) {
                console.log(result);
                if (result === true) {
                    $location.path('/');
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();