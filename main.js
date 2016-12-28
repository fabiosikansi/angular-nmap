/**
 * Created by Fabio on 27/12/2016.
 */
var nmapApp = angular.module('nmap', ['angular-nmap']);

nmapApp.controller('NmapController',['$scope',($scope) => {

    $scope.loadDataset = () => {
        var dataset = $scope.dataset;
        $scope.nmapWidth = $(window).width() - 10;
        $scope.nmapHeight = $(window).height() - 70;


        d3.csv("data/" + dataset, function (error, data) {
            var cs = ["configuration01.csv", "londonBoroughsCrimeRates.csv", "londonBoroughsHousePrice.csv", "londonBoroughsPopulation.csv"].indexOf(dataset) > -1 ? d3.scale.linear().domain(d3.extent(data, function (d) {
                return parseFloat(d.class);
            })).range(["#c6dbef", "#08306b"]) : d3.scale.category10();

            $scope.nmapOptions = {
                colorScale: cs
            };

            $scope.nmapData = data;
            $scope.$apply();
        });
    };


}]);