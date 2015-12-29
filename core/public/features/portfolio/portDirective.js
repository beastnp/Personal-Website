angular.module('noServerApp')

.directive('portDirective', function () {

    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attributes) {
            element.css('color', 'white')
        }
    };

});