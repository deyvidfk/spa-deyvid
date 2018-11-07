(function () {

    var appModule = angular.module('Tarefas');

    appModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider
            .html5Mode(true); // enable html5Mode for pushstate ('#'-less URLs DOESN'T WORK)
        $locationProvider.hashPrefix('!');

        $stateProvider.state('tasks', {
            url: '/',
            templateUrl: '/views/task-listing.html'
        });

        $stateProvider.state('editTask', {
            url: '/task/:id',
            templateUrl: '/views/task-edit.html',
        });


        $stateProvider.state('newTask', {
            url: '/task/new',
            templateUrl: '/views/task-create.html',
            
        });

        $urlRouterProvider.otherwise('/');

    });
})()