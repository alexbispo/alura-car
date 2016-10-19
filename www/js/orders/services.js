angular.module("starter")
.service("OrdersService", function($http){
  var url = "http://aluracar.herokuapp.com/salvarpedido";

  return {
    postSave : function(order){
        return $http.get(url, order).then(function(res){
          return "success";
        });
    }
  };
});
