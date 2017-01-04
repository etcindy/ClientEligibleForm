angular.module('sortApp', [])

.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchclient = '';     // set the default search/filter term

    // create the list of clients
    $scope.clients = [
      { name: 'Carl Baynard', address: '4358 Burnside Avenue', phone: '317-287-8484', loanumber: '0090000892' },
      { name: 'Brian A Smith', address: 'Po Box 552, Plains, TX, 79355 ', phone: '317-555-3289', loanumber: '000000490' },
      { name: 'Harry L Johnson', address: '66 Gay St, Plain City, OH, 43064 ', phone: '317-905-3889', loanumber: '000078007' },
      { name: 'Cleve H Johnson', address: '374 Wilson Ave, Janesville, WI, 53548', phone: '317-765-3189', loanumber: '0000050006' }
    ];

});