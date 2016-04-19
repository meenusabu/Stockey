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
  function StockCreateController(Restangular,$state){
    var vm=this;
    vm.stockItem={"name":"apple","quantity":40};
  }

  angular.module('stock').controller('StockIndexController',StockIndexController);
  angular.module('stock').controller('StockCreateController',StockCreateController);
  })();
