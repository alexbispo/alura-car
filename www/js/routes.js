angular.module("starter").config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/cars");
  $stateProvider
  .state("carsIndex", {
    url         : "/cars",
    templateUrl : "templates/cars/index.html",
    controller  : "CarsIndexCtrl"
  })

  .state("carsShow", {
    url         : "/car/:car",
    templateUrl : "templates/cars/show.html",
    controller  : "CarsShowCtrl"
  })

  .state("ordersNew", {
    url         : "/order/:order",
    templateUrl : "templates/orders/new.html",
    controller  : "OrdersNewCtrl"
  });
});
