(function(){

function StockIndexController(Restangular){
var ctrl=this;
function index(){
var baseStock=Restangular.all('stock');
baseStock.getList().then(function(data) {
ctrl.stockData = data;
});
}

index();
}
angular.module('stock').controller('StockIndexController',StockIndexController);
})();
