(function(){

var modules = ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate','restangular', 'stock', 'product', 'bill'];

angular.module('stockey', modules);

function config($stateProvider, $urlRouterProvider,RestangularProvider) {
  RestangularProvider.setDefaultHeaders({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  });
  RestangularProvider.setDefaultHttpFields({withCredentials: true});
RestangularProvider.setBaseUrl("http://localhost:1337/");
    /* Add New States Above */
  $urlRouterProvider.otherwise('/home');
}

angular.module('stockey').config(config);
})();
