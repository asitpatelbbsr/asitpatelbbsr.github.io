// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        	 url: '/contact',
             templateUrl: 'ContactUS.html'    
        })
         .state('creation', {
        	 url: '/myCreation',
             templateUrl: 'mycreation.html'    
        })
        .state('men', {
        	 url: '/mentatoo',
             templateUrl: 'mentatoo.html'    
        })
        .state('women', {
        	 url: '/womentatoo',
             templateUrl: 'womentatoo.html'    
        })
        
});