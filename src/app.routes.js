(function () {

    var appModule = angular.module('Tarefas');

    appModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider
            .html5Mode(true); // enable html5Mode for pushstate ('#'-less URLs DOESN'T WORK)
        $locationProvider.hashPrefix('!');

        $stateProvider.state('principal', {
            url: '/',
            templateUrl: '/views/principal.html'
        });

        $stateProvider.state('tarefa', {
            url: '/tarefa/:id',
            templateUrl: '/views/tarefa.html',
            controller: 'TarefaCtrl'
        });


        $stateProvider.state('newTask', {
            url: '/task',
            templateUrl: '/views/new-task.html',
            
        });

        $urlRouterProvider.otherwise('/');

    });
})()