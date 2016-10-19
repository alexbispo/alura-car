angular.module("starter")
.controller("OrdersNewCtrl", function($scope, $stateParams, $ionicPopup, $state, OrdersService){
  $scope.order = angular.fromJson($stateParams.order);
  $scope.order.customer = {};

  $scope.ordersCreate = function(){
    orderParams = {
      params : {
        carro     : $scope.order.car,
        preco     : $scope.order.total,
        nome      : $scope.order.customer.name,
        endereco  : $scope.order.customer.address,
        email     : $scope.order.customer.email
      }
    };
    OrdersService.postSave(orderParams).then(function(data){
      $ionicPopup.alert({
        title    : "Parabéns!",
        template : "Você acaba de comprar um carro."
      }).then(function(){
        $state.go("carsIndex");
      });
    }, function(error){
      $ionicPopup.alert({
        title    : "Erro!",
        template : "Todos os campos são obrigatórios!"
      });
    });

  };
});
