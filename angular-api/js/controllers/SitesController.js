app.controller('SitesController', ['$scope', 'places', function($scope, places) {
 
	$scope.mapCenter = {
  lat: 42.300109,
  lng: -83.73545,
  zoom: 14
};
   places.success(function(data){
    $scope.geodata = data;
    
     $scope.mapMarkers = geodataToMarkers($scope.geodata);
     
});
  
}]);

