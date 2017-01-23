/// <reference path="C:\Users\ecaldwell\Documents\Visual Studio 2015\Projects\ClientEligibleForm\ClientEligibleForm\Scripts/angular.js" />

var ClientService = angular.module('ClientService', []);

        ClientService.factory('clientApi', function($http) {

            var urlBase = "http://localhost:60061/api";
            var clientApi = {};
            clientApi.getClients = function() {
                return $http.get(urlBase + '/ClientPrimary/');

            };

            return clientApi;
        });

var CompanyService = angular.module('CompanyService', []);

        CompanyService.factory('companyApi', function ($http) {

            var urlBase = "http://localhost:60061/api";
            var companyApi = {};
            companyApi.getCompanies = function () {
                return $http.get(urlBase + '/ClientCompanies');

            };

            return companyApi;
        });

var CoBorrowerService = angular.module('CoBorrowerService', []);

        CoBorrowerService.factory('coBorrowerApi', function ($http) {

            var urlBase = "http://localhost:60061/api";
            var coBorrowerApi = {};
            coBorrowerApi.getCoBorrowers = function () {
                return $http.get(urlBase + '/ClientCoBorrower');

            };

            return coBorrowerApi;
        });