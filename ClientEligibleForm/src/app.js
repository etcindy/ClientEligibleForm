angular.module('clientapp',['ClientService', 'CompanyService', 'CoBorrowerService', 'ui.bootstrap'])

.controller("mainController", function ($scope, clientApi, companyApi, coBorrowerApi, $http) {

        getClients();
            function getClients(){
                clientApi.getClients().success(function (clients) {

                    $scope.selected = undefined;
                    $scope.clients = clients;

                    //$scope.PrimaryBorrowerName = PrimaryBorrowerName;
                    var x = 6; //or whatever offset
                    var currentDate = new Date();
                    currentDate.setMonth(currentDate.getMonth() - x);
                    $scope.sixMonthAgo = currentDate;
                
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load Borrower Refi data: ' + error.message;
                    });

        }

        getCompanies();
            function getCompanies() {
                companyApi.getCompanies().success(function (companies) {
                    $scope.companies = companies;
            
                })
                    .error(function (error) {
                        $scope.status = 'Unable to load Company data: ' + error.message;
                    });
            }


        getCoBorrowers();
            function getCoBorrowers() {
                coBorrowerApi.getCoBorrowers().success(function (borrowers) {
                    $scope.borrowers = borrowers;
            
                })
                    .error(function (error) {
                        $scope.status = 'Unable to load CoBorrower data: ' + error.message;
                    });
            }

            $scope.sort = function(keyname) {
                $scope.sortType = "LoanID"; // set the default sort type
                $scope.sortkey = keyname;  // set the sortkey to the param passed
                $scope.reverse = !$scope.reverse;     // If true then make it false vice versa
            }
    
            //$scope.search = 'Search Client';
            //$scope.search = function (row) {
            //    return (angular.lowercase(row.lname).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            //            angular.lowercase(row.address).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            //            angular.lowercase(row.loanid).indexOf(angular.lowercase($scope.query) || '') !== -1);
            //};



            $scope.IsVisible = false;
            $scope.ShowHide = function() {
                //if Div is visible it will be hidden and vice vesa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }


});

