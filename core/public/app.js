angular.module('noServerApp', ['ui.router', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'features/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'features/portfolio/portfolioTmpl.html',
            controller: 'portfolioCtrl'
        }) 
        .state('capabilities', {
            url: '/capabilities',
            templateUrl: 'features/capabilities/capabilitiesTmpl.html',
            controller: 'capabilitiesCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'features/contact/contactTmpl.html',
            controller: 'contactCtrl'
        });
    
    $urlRouterProvider
        .otherwise('/home');


});