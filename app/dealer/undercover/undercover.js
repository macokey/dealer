'use strict';
var UndercoverRouteConfig = /** @class */ (function () {
    //static $inject = ['$routeProvider'];
    function UndercoverRouteConfig($routeProvider) {
        $routeProvider.when('/undercover', {
            templateUrl: 'undercover/undercover.html'
        });
    }
    return UndercoverRouteConfig;
}());
angular.module('dealer.undercover', ['ngRoute', 'dealer.directive.createJoinRoom', 'dealer.services'])
    .config(UndercoverRouteConfig);
