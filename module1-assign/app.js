(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.checkLunch = function () {
        if (!$scope.lunchItems) {
          $scope.message = 'Please enter data first';
          return;
        }
  
        var items = $scope.lunchItems.split(',');
        var itemCount = 0;
  
        for (var i = 0; i < items.length; i++) {
          if (items[i].trim() !== '') {
            itemCount++;
          }
        }
  
        if (itemCount === 0) {
          $scope.message = 'Please enter data first';
        } else if (itemCount <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };
    }
  })();