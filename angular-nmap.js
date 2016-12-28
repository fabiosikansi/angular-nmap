angular.module('angular-nmap', []).directive('nmap',() => {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            options: '=',
            method: '=',
            width: '=',
            height: '='
        },
        link: (scope, element, attr) => {
            if (!scope.data) {
                scope.data = [];
            }

            var drawNmap = (data) => {
                element.text("");
                var el = element[0];
                var svg = d3.select(el).append('svg').attr({width: scope.width, height: scope.height});
                var elements = [];
                for(var i = 0; i<data.length; i++){
                    elements.push(new nmap_element({
                        id:data[i].id,
                        x:data[i].x,
                        y:data[i].y,
                        weight:(("weight" in data[i]) ? data[i].weight : 1),
                        klass:(("class" in data[i]) ? data[i].class : 1)
                    }));
                }
                var map = new nmap({x:0, y:0, width:parseInt(scope.width), height:parseInt(scope.height)});
                var nmapData = null;
                if (scope.method == "ew") {
                    nmapData = map.equalWeight({elements:elements});
                } else {
                    nmapData = map.alternateCut({elements:elements});
                }

                svg.append("g").attr("class", "nmap").selectAll("rect")
                    .data(nmapData).enter().append("rect")
                    .attr("x", function(d){ return d.attr().x })
                    .attr("y", function(d){ return d.attr().y })
                    .attr("fill", function (d) { return scope.options.colorScale(parseFloat(d.attr().element.attr().klass))})
                    .attr("width", function(d){ return d.attr().width })
                    .attr("height", function(d){ return d.attr().height });
            }

            var onDataChange = (val) => {
                if ($.isArray(val) && val.length) {
                    drawNmap(val);
                }
            };
            scope.$watch("data",onDataChange,true);
            scope.$watch("width",onDataChange,true);
            scope.$watch("height",onDataChange,true);

        }
    }
});


