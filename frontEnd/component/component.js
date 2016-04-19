(function(){

angular.module('stockey').component('createUpdate', {

      bindings:{
          value: '=',
          type: '@'
      },
      templateUrl: 'component/component.html',
      controllerAs:'ctrl',
      controller: 'ComponentController'
  });

})();
