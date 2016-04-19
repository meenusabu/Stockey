(function(){

function config($stateProvider) {

  /* Add New States Above */
  $stateProvider.state('ProductIndex',{
    url:'/products',
    templateUrl:'product/product-partial/product-index.html',
    controller:'ProductCtrl',
    controllerAs:'product'
  }
);

}
angular.module('product', []).config(config);

})();
