angular.module('clientapp',['ClientService', 'CompanyService', 'CoBorrowerService', 'ui.bootstrap'])

.controller("mainController", function ($scope, clientApi, companyApi, coBorrowerApi, $http) {

    $scope.currentPage = 1;
    $scope.limit = 10;

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
                $scope.sortType = 'LoanID'; // set the default sort type
                $scope.sortkey = keyname;  // set the sortkey to the param passed
                $scope.reverse = !$scope.reverse;     // If true then make it false vice versa
            }
    
            

            $scope.IsVisible = false;
            $scope.ShowHide = function(loanId) {
                //if Div is visible it will be hidden and vice vesa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
                if ($scope.IsVisible === true) {
                    getCoBorrowers();
                }
            }

           
                        
                    

   });
