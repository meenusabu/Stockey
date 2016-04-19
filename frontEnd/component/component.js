(function(){

angular.module('stockey').component('createUpdate', {

      bindings:{
          ngModel: '='
      },
      templateUrl: 'component/component.html',
      controllerAs:'ctrl',
      controller: 'ComponentController'
  });

})();
