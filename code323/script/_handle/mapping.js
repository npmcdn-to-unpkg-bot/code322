agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("HOME_APP", ["agGrid"]);

module.controller("HOME_APP_CONTROLLER", function ($scope,$http,$q) {

    var col = [
    { "headerName": "Point", "field": "point" },
    { "headerName": "Home Team", "field": "homeTeam" },
    { "headerName": "Away Team", "field": "awayTeam" },
    { "headerName": "Make Image", "field": "markerImage" },
    { "headerName": "Information", "field": "information" },
    { "headerName": "Fixture", "field": "fixture" },
    { "headerName": "Capacity", "field": "capacity" },
    { "headerName": "TV", "field": "tv" }
    ];
    $scope.gridOptions = {
        columnDefs: col,
        rowData: null,
        enableSorting: true,
        enableFilter: true,
        enableColResize: true
    };
    $scope.loadData = function () {
        var getjson=function() {
            var defer = $q.defer();
            $http.get(DATA_FOURTAIN.FILE_JSON_MAP)
                .success(function (r) {
                    defer.resolve(r);
                }).error(defer.reject);
            return defer.promise;
        }
        getjson().then(function (r) {
            $scope.gridOptions.api.setRowData(r);
        });
    }
    $scope.loadData();
});