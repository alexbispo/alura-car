angular.module("starter")
.service("CarsService", function($http){
    var url = "http://aluracar.herokuapp.com/";

    return {
      getList : function(){
        return $http.get(url).then(function(res){
          return res.data;
        });
      }
    };
});
