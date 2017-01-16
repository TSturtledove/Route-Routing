var app = angular.module("longRoad", ["ngRoute"])

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: "otherwise",
    templateUrl: "other.html"
  })

  .when("/hw75", {
    controller: "highway75",
    templateUrl: "hw75.html"
  })
  .when("/hw100", {
    controller: "highway100",
    templateUrl: "hw100.html"
  })
})

app.controller("highway75", function($scope) {
  $scope.highwayName = "Route 75"
  $scope.highwayDescription = "U.S. Route 75 is a north–south U.S. Highway. The highway's northern terminus is in Kittson County, Minnesota, at the Canada–US border, where it once continued as Manitoba Highway 75 on the other side of the now-closed border crossing. Its southern terminus is at Interstate 30 and Interstate 45 in Dallas, where it is known as North Central Expressway.  U.S. 75 was a border-to-border route, from Canada to the Gulf of Mexico at Galveston, Texas. However, the entire segment south of Dallas has been decommissioned in favor of Interstate 45, a cutoff section of town-to-town surface road having become State Highway 75."
})

app.controller("highway100", function($scope) {
  $scope.highwayName = "Minnesota State Highway 100"
  $scope.highwayDescription = "Minnesota State Highway 100 (MN 100) is a state highway in the Twin Cities region of Minnesota, which runs from its interchange with Interstate 494 (I-494) in Bloomington and continues north to its northern terminus at its interchange with I-694 in Brooklyn Center. The southern end of MN 100 continues in Bloomington as Normandale Boulevard (County Road 34, CR 34). At the north end, the main line of MN 100 merges with I-694 in Brooklyn Center. The route is 16 miles (26 km) in length."
})

app.controller("otherwise", function($scope) {
})
