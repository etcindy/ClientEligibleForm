angular.module("sortApp", [])

.controller("mainController", function ($scope) {
    $scope.sortType = "name"; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchFish = '';     // set the default search/filter term

    // create the list of sushi rolls 
    $scope.sushi = [
      { name: "Carl Baynard", address: "3339 Moller Avenue", phone: "317-287-8484", loan_numb: "1900892", eligible: "Eligible" },
      { name: "Brian A Smith", address: "Po Box 552, Plains", phone: "317-555-3289", loan_numb: "1000490", eligible: "Non Eligible" },
      { name: "Harry L Johnson", address: "6678 Gaylord St, Cleveland, OH", phone: "317-905-3889", loan_numb: "20078007", eligible: "Non Eligible" },
      { name: "Lyle H Alzado", address: "374 Wilson Ave, Janesville", phone: "317-765-3189", loan_numb: "10050006", eligible: "Eligible" },
      { name: "Jeff Rodgers", address: "4358 Burnside Avenue", phone: "317-287-8484", loan_numb: "1900892", eligible: "Eligible" },
      { name: "Sean A Johns", address: " 552 Wishire, Plains", phone: "317-555-3289", loan_numb: "8000490", eligible: "Eligible" },
      { name: "Mary L Zeiking", address: "66 Gay St, Plain City, OH", phone: "317-905-3889", loan_numb: "30078007", eligible: "Eligible" },
      { name: "John H Smith", address: "1245 Wilson Ave, Janesville", phone: "317-765-3189", loan_numb: "20050006", eligible: "Eligible" }
    ];


    //$scope.search = 'Search Client';
    $scope.IsVisible = false;
    $scope.ShowHide = function() {
        //if Div is visible it will be hidden and vice vesa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

    //$scope.getSearchResults = function (val) {
    //    return dataContext.getSearchResults(val).then(function (data) {
    //        if (data && data.results.length === 0) {
    //            data.results.push({ lastName: '', firstName: '', loanNumber: 'No Results', NoResults: true });
    //            return data.results;
    //        } else {
    //            angular.forEach(data.results, function (result) {
    //                result.inlineCount = data.inlineCount;
    //            });
    //            return data.results;
    //        }
    //    });
    //};

    });