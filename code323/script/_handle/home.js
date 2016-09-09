agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module("HOME_APP", ["agGrid"]);
module.controller("HOME_APP_CONTROLLER", function ($scope) {
    var col = [
    { "headerName": "Point", "field": "point" },
    { "headerName": "Home Team", "field": "homeTeam" },
    { "headerName": "Make Image", "field": "makerImage" },
    { "headerName": "Away Team", "field": "awayTeam" },
    { "headerName": "Information", "field": "information" },
    { "headerName": "Fixture", "field": "fixture" },
    { "headerName": "Capacity", "field": "capacity" },
    { "headerName": "TV", "field": "tv" }
    ];
    var dat = [
        {
            "point": "40.266044,-74.718479",
            "homeTeam": "Lawrence Library",
            "awayTeam": "LUGip",
            "markerImage": "images/red.png",
            "information": "Linux users group meets second Wednesday of each month.",
            "fixture": "Wednesday 7pm",
            "capacity": "",
            "tv": ""
        },
        {
            "point": "40.211600,-74.695702",
            "homeTeam": "Hamilton Library",
            "awayTeam": "LUGip HW SIG",
            "markerImage": "images/white.png",
            "information":
                "Linux users can meet the first Tuesday of the month to work out harward and configuration issues.",
            "fixture": "Tuesday 7pm",
            "capacity": "",
            "tv": ""
        },
        {
            "point": "40.294535,-74.682012",
            "homeTeam": "Applebees",
            "awayTeam": "After LUPip Mtg Spot",
            "markerImage": "images/newcastle.png",
            "information": "Some of us go there after the main LUGip meeting, drink brews, and talk.",
            "fixture": "Wednesday whenever",
            "capacity": "2 to 4 pints",
            "tv": ""
        }
    ];

    $scope.gridOptions = {
        columnDefs: col,
        rowData: dat,
        enableSorting: true,
        enableFilter: true,
        enableColResize: true
       /* showToolPanel: true,
        rowModelType: 'pagination',
        rowGroupPanelShow: 'always',
        enableStatusBar: true,
        paginationPageSize: 500,
        enableRangeSelection: true*/
    };
   /* $scope.loadData = function () {
        var defer = $q.defer();
        $http.get("../../src/variable/map.json")
            .success(function (r) {
                defer.resolve(r);
            }).error(defer.reject);
        return defer.promise;
    }
    $scope.loadData()
        .then(function (r) {
            console.log(r);
            $scope.gridOptions = {
                rowData: r

            }
        });*/
});

