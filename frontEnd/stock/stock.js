(function(){

function config($stateProvider,$urlRouterProvider) {
  $stateProvider.state('StockIndex',{
    url:'/stock/index',
    templateUrl:'stock/stock-partial/stock-index.html',
    controller:'StockIndexController',
    controllerAs:'ctrl'
  }
);

    /* Add New States Above */

}
angular.module('stock', []).config(config);

})();
