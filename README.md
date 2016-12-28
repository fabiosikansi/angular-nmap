# angular-nmap

[nmap.js] \(Neighborhood Preservation Space-filling Algorithm [1]\) angular directive

[Live demo](https://fabiosikansi.github.io/angular-nmap/)

### Installation

Run
`
npm install
`


### Usage:
```html
<nmap data="nmapData" options="nmapOptions" width="nmapWidth" height="nmapHeight" method="ac" />
```

```javascript
var nmapApp = angular.module('nmap', ['angular-nmap']);

nmapApp.controller('NmapController',['$scope',($scope) => {
    $scope.nmapData = [
        {id: 1,x: 10, y: 10,weight: 1,class: 1},
        {id: 2,x: 20, y: 20,weight: 1,class: 2},
        {id: 3,x: 30, y: 30,weight: 1,class: 3},
        {id: 4,x: 40, y: 40,weight: 1,class: 4},
        {id: 5,x: 50, y: 50,weight: 1,class: 5}
    ];

    $scope.nmapOptions = {
        colorScale: d3.scale.category10()
    };

    $scope.nmapWidth = $(window).width() - 10;
    $scope.nmapHeight = $(window).height() - 70;
});

```

### References

 * [nmap.js](https://github.com/sebastian-meier/nmap.js): Sebastian Meyer implementation
 * [d3.js](https://d3js.org/)
 * [angular](https://angularjs.org/)

### Original Publication
[1]: Duarte, F.S.L.G.; Sikansi, F.; Fatore, F.M.; Fadel, S.G.; Paulovich, F.V., "Nmap: A Novel Neighborhood Preservation Space-filling Algorithm," Visualization and Computer Graphics, IEEE Transactions on , vol.20, no.12, pp.2063,2071, Dec. 31 2014; doi: 10.1109/TVCG.2014.2346276;URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6876012&isnumber=6935054

[nmap.js]:https://github.com/sebastian-meier/nmap.js
