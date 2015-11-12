angular.module('noServerApp')

.directive('portDirective', function () {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/js/portfolio/portfolioTmpl.html',
        link: function (scope, element, attributes) {
            scope.flag = true;
            element.on('click', function() {
                scope.flag = !scope.flag;
                scope.$apply();
            })
        }
    };

});