angular.module('noServerApp').controller('capabilitiesCtrl', function($scope, mainService) {
    
    $scope.skills = mainService.skillsArray;
    
    $scope.flag = false;
    
    $scope.showResume = function() {
        $scope.flag = !$scope.flag;
    }
    
});