    (function () {
    'use strict';

    angular.module('app')
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username,  callback) {
           var testUser = { username: 'test',  firstName: 'Test', lastName: 'User' };
            $http.post('/api/authenticate', { username: username      })
                .then(function (response) {
                    //console.log(response.token)
                    response.token='fake-jwt-token';
                    console.log(response);
                    // login successful if there's a token in the response
                    if (response.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = { username: username, token: response.token };

                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                        // execute callback with true to indicate successful login
                        //console.log(callback);
                        //response.result=true;
                        console.log(response);

                        callback(true);
                    } else {
                        // execute callback with false to indicate failed login
                        //callback(false);
                        //console.log(response)
                    }
                });
                callback(true);
        }

        function Logout() {
            console.log('Logout');
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();