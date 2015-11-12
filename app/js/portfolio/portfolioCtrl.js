angular.module('noServerApp').controller('portfolioCtrl', function($scope) {
    
    $scope.flag = true;
    
    $scope.showHide = function() {
        $scope.flag = !$scope.flag;
    };
    
});