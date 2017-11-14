app.factory('places', ['$http', function($http){
 return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch%7Callimages&callback=JSON_CALLBACK&gscoord=42.300109%7C-83.73545&gsradius=10000&gslimit=max')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);
