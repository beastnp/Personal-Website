angular.module('noServerApp').controller('portfolioCtrl', function($scope) {
    
    $scope.flagTop = true;
    
    $scope.showHideTop = function() {
        $scope.flagTop = !$scope.flagTop;
    };
    
    $scope.flagBottom = true;
    
    $scope.showHideBottom = function() {
        $scope.flagBottom = !$scope.flagBottom;
    };
    
});