  (function(){

  function StockIndexController(Restangular,$state){
  var ctrl=this;
  ctrl.remove=remove;

  function index(){
  var baseStock=Restangular.all('stock');
  baseStock.getList().then(function(data) {
  ctrl.stockData = data;
  });
  }

  function remove(item){
    item.remove().then(function(data){
      console.log(data);
      $state.reload();
    });
  }

  index();
  }
  angular.module('stock').controller('StockIndexController',StockIndexController);
  })();
