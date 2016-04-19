(function() {
    'use strict';

    function productCtrl(Restangular,$state) {
        var vm = this;
        vm.loading = false;
        vm.products = [];
        vm.remove = remove;
        function remove(item){
          item.remove().then(function(data){
            $state.reload();
          }).catch(function(err){
            console.log(err);
          });
        }
        var getProducts = function() {
            vm.loading = true;
            var products = Restangular.all('product');
            products.getList().then(function(data) {
                vm.products = data;
                vm.loading = false;
            }).catch(function() {
                vm.loading = false;
            });
        };
        getProducts();
    }

    angular
        .module('product')
        .controller('ProductCtrl', productCtrl);
})();
