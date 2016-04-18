(function(){
  
var modules = ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'stock', 'product', 'bill'];

angular.module('stockey', modules);

function config($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
  $urlRouterProvider.otherwise('/home');
}

angular.module('stockey').config(config);
})();
