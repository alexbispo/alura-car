angular.module("starter").
controller("CarsIndexCtrl", function($scope, CarsService){
  CarsService.getList().then(function(data){
      $scope.cars = data;
  });
})

.controller("CarsShowCtrl", function($stateParams,$scope){
  $scope.car = angular.fromJson($stateParams.car);
  $scope.accessories = [
    {
      name  : "Freio ABS",
      price : 800
    },
    {
      name  : "Ar Condicionado",
      price : 1000
    },
    {
      name  : "MP3 Player",
      price : 500
    }
  ];

  $scope.order = {
    car   : $scope.car,
    total : $scope.car.preco
  };

  $scope.checkAccessorie = function(accessoriePrice, isChecked){
    if(isChecked) {
      $scope.order.total += accessoriePrice;
    } else {
      $scope.order.total -= accessoriePrice;
    }
  };
});
